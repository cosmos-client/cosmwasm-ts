#!/usr/bin/env bash
# npm i -g swagger-combine
# set -eo pipefail

rm -r swagger.yaml
rm -r ./proto
rm -r ./proto-thirdparty

# Copy proto
cp -r ~/github.com/CosmWasm/wasmd/proto ./proto
cp -r ~/github.com/CosmWasm/wasmd/third_party/proto ./proto-thirdparty

mkdir -p ./tmp-swagger-gen
proto_dirs=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do

  # generate swagger files (filter query files)
  query_file=$(find "${dir}" -maxdepth 1 \( -name 'query.proto' -o -name 'service.proto' \))
  if [[ ! -z "$query_file" ]]; then
    buf protoc  \
    -I "proto" \
    -I "proto-thirdparty" \
    "$query_file" \
    --swagger_out=./tmp-swagger-gen \
    --swagger_opt=logtostderr=true --swagger_opt=fqn_for_swagger_name=true --swagger_opt=simple_operation_ids=true
  fi
done

# combine swagger files
# uses nodejs package `swagger-combine`.
# all the individual swagger files need to be configured in `config.json` for merging
swagger-combine ./configs/config.json -o ./tmp-swagger-gen/swagger.yaml -f yaml --continueOnConflictingPaths true --includeDefinitions true

cp ./tmp-swagger-gen/swagger.yaml ./swagger.yaml

# clean swagger files
rm -r ./proto
rm -r ./proto-thirdparty
rm -r ./tmp-swagger-gen

# generate openapi
docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -g typescript-axios -i /local/swagger.yaml -o /local/src/openapi/

rm swagger.yaml
