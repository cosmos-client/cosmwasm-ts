#!/usr/bin/env bash
# npm i -g swagger-combine
git submodule update --init --recursive

cd chain
make make proto-swagger-gen

# combine swagger files
# uses nodejs package `swagger-combine`.
# all the individual swagger files need to be configured in `config.json` for merging
swagger-combine ./docs/client/cosmwasm/wasm/v1/query.swagger.json -o ./docs/client/swagger.yaml -f yaml --continueOnConflictingPaths true --includeDefinitions true

cd ..

cp ./chain/docs/client/swagger.yaml ./swagger.yaml

# generate openapi
docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -g typescript-axios -i /local/swagger.yaml -o /local/src/openapi/

#rm swagger.yaml
