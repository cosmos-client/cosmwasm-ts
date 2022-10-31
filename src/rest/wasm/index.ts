import { cosmwasm } from '../../proto';
import cosmosclient from '@cosmos-client/core';

export * as wasm from './module';

cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgStoreCode', cosmwasm.wasm.v1.MsgStoreCode);
cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgInstantiateContract', cosmwasm.wasm.v1.MsgInstantiateContract);
cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgExecuteContract', cosmwasm.wasm.v1.MsgExecuteContract);
cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgMigrateContract', cosmwasm.wasm.v1.MsgMigrateContract);
cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgUpdateAdmin', cosmwasm.wasm.v1.MsgUpdateAdmin);
cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgClearAdmin', cosmwasm.wasm.v1.MsgClearAdmin);
cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgIBCCloseChannel', cosmwasm.wasm.v1.MsgIBCCloseChannel);
cosmosclient.codec.register('/cosmwasm.wasm.v1.MsgIBCSend', cosmwasm.wasm.v1.MsgIBCSend);

cosmosclient.codec.register('/cosmwasm.wasm.v1.StoreCodeProposal', cosmwasm.wasm.v1.StoreCodeProposal);
cosmosclient.codec.register('/cosmwasm.wasm.v1.InstantiateContractProposal', cosmwasm.wasm.v1.InstantiateContractProposal);
cosmosclient.codec.register('/cosmwasm.wasm.v1.MigrateContractProposal', cosmwasm.wasm.v1.MigrateContractProposal);
cosmosclient.codec.register('/cosmwasm.wasm.v1.UpdateAdminProposal', cosmwasm.wasm.v1.UpdateAdminProposal);
cosmosclient.codec.register('/cosmwasm.wasm.v1.ClearAdminProposal', cosmwasm.wasm.v1.ClearAdminProposal);
cosmosclient.codec.register('/cosmwasm.wasm.v1.PinCodesProposal', cosmwasm.wasm.v1.PinCodesProposal);
cosmosclient.codec.register('/cosmwasm.wasm.v1.UnpinCodesProposal', cosmwasm.wasm.v1.UnpinCodesProposal);
