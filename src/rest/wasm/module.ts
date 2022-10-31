import { QueryApi } from '../../openapi';
import cosmosclient from '@cosmos-client/core';

export function contractInfo(sdk: cosmosclient.CosmosSDK, address: cosmosclient.AccAddress) {
  return new QueryApi(undefined, sdk.url).contractInfo(address.toString());
}

export function code(sdk: cosmosclient.CosmosSDK, address: cosmosclient.AccAddress) {
  return new QueryApi(undefined, sdk.url).code(address.toString());
}

export function codes(
  sdk: cosmosclient.CosmosSDK,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).codes(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function pinnedCodes(
  sdk: cosmosclient.CosmosSDK,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).pinnedCodes(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function rawContractState(sdk: cosmosclient.CosmosSDK, address: cosmosclient.AccAddress, queryData: string) {
  return new QueryApi(undefined, sdk.url).rawContractState(address.toString(), queryData);
}

export function smartContractState(sdk: cosmosclient.CosmosSDK, address: cosmosclient.AccAddress, queryData: string) {
  return new QueryApi(undefined, sdk.url).smartContractState(address.toString(), queryData);
}

export function allContractState(
  sdk: cosmosclient.CosmosSDK,
  address: cosmosclient.AccAddress,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).allContractState(
    address.toString(),
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function contractHistory(
  sdk: cosmosclient.CosmosSDK,
  address: cosmosclient.AccAddress,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).contractHistory(
    address.toString(),
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function contractsByCode(
  sdk: cosmosclient.CosmosSDK,
  codeId: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).contractsByCode(
    codeId,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}
