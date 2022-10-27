import cosmwasmclient from '../..';
import cosmosclient from '@cosmos-client/core';
import Long from 'long';

describe('wasm', () => {
  it('instantiate-contract', async () => {
    expect.hasAssertions();

    const sdk = new cosmosclient.CosmosSDK('http://localhost:1317', 'ununifi-test-private-m1');
    const bech32Prefix = 'ununifi';
    const accAddr = bech32Prefix;
    const accPub = bech32Prefix + cosmosclient.AddressPrefix.Public;
    const valAddr = bech32Prefix + cosmosclient.AddressPrefix.Validator + cosmosclient.AddressPrefix.Operator;
    const valPub =
      bech32Prefix + cosmosclient.AddressPrefix.Validator + cosmosclient.AddressPrefix.Operator + cosmosclient.AddressPrefix.Public;
    const consAddr = bech32Prefix + cosmosclient.AddressPrefix.Validator + cosmosclient.AddressPrefix.Consensus;
    const consPub =
      bech32Prefix + cosmosclient.AddressPrefix.Validator + cosmosclient.AddressPrefix.Consensus + cosmosclient.AddressPrefix.Public;
    const bech32PrefixConfig = {
      accAddr,
      accPub,
      valAddr,
      valPub,
      consAddr,
      consPub,
    };
    cosmosclient.config.setBech32Prefix(bech32PrefixConfig);

    const privKey = new cosmosclient.proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic(
        'figure web rescue rice quantum sustain alert citizen woman cable wasp eyebrow monster teach hockey giant monitor hero oblige picnic ball never lamp distance',
      ),
    });
    const pubKey = privKey.pubKey();
    const address = cosmosclient.AccAddress.fromPublicKey(pubKey);

    expect(address.toString()).toBe('ununifi1a8jcsmla6heu99ldtazc27dna4qcd4jygsthx6');

    const senderAddress = address;

    // get account info
    const account = await cosmosclient.rest.auth
      .account(sdk, senderAddress)
      .then((res) => cosmosclient.codec.protoJSONToInstance(cosmosclient.codec.castProtoJSONOfProtoAny(res.data.account)))
      .catch(() => undefined);

    if (!(account instanceof cosmosclient.proto.cosmos.auth.v1beta1.BaseAccount)) {
      console.log(account);
      return;
    }

    console.log(account);

    // build tx
    const msgInstantiateContract = new cosmwasmclient.proto.cosmwasm.wasm.v1.MsgInstantiateContract({
      sender: senderAddress.toString(),
      admin: senderAddress.toString(),
      code_id: Long.fromNumber(1),
      label: 'instantiate-contract-test',
      funds: [{ amount: '100', denom: 'uguu' }],
    });

    const txBody = new cosmosclient.proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.instanceToProtoAny(msgInstantiateContract)],
    });
    const authInfo = new cosmosclient.proto.cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.instanceToProtoAny(pubKey),
          mode_info: {
            single: {
              mode: cosmosclient.proto.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
            },
          },
          sequence: account.sequence,
        },
      ],
      fee: {
        gas_limit: Long.fromString('200000'),
      },
    });

    // sign
    const txBuilder = new cosmosclient.TxBuilder(sdk, txBody, authInfo);
    const signDocBytes = txBuilder.signDocBytes(account.account_number);
    txBuilder.addSignature(privKey.sign(signDocBytes));

    // broadcast
    const res = await cosmosclient.rest.tx.broadcastTx(sdk, {
      tx_bytes: txBuilder.txBytes(),
      mode: cosmosclient.rest.tx.BroadcastTxMode.Block,
    });

    console.log(res.data.tx_response);

    expect(res.data.tx_response?.raw_log?.match('failed')).toBeFalsy();
  });
});
