import { CosmWasmClient } from 'cosmwasm';

describe('wasm', () => {
  it('instantiate-contract', async () => {
    expect.hasAssertions();

    const rest = 'https://rpc.stargaze-apis.com/';
    const marketplace = 'stars1fvhcnyddukcqfnt7nlwv3thm5we22lyxyxylr9h77cvgkcn43xfsvgv0pl';
    const collections = ['stars19jq6mj84cnt9p7sagjxqf8hxtczwc8wlpuwe4sh62w45aheseues57n420'];

    const client = await CosmWasmClient.connect(rest);

    let results = [];
    for (const sg721Addr of collections) {
      const response = await client.queryContractSmart(marketplace, {
        asks_sorted_by_price: { collection: sg721Addr, include_inactive: false },
      });
      if (response.asks.length > 0) {
        console.log(sg721Addr + ',' + response.asks[0].price);
        const lowestFixed = response.asks.find((ask: { sale_type: string }) => ask.sale_type === 'fixed_price');
        if (lowestFixed) {
          results.push({ address: sg721Addr, price: lowestFixed.price });
        } else {
          console.log(sg721Addr + ',' + 'no-fixed-price');
          results.push({ address: sg721Addr, price: response.asks[response.length - 1].price });
        }
      } else {
        console.log(sg721Addr + ',' + 'no-asks');
      }
    }
    console.log(results);
    expect(results.length).toBeGreaterThan(0);
  });
});
