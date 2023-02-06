#!/usr/bin/env bash
# npm i -g swagger-combine

rm -r swagger.yaml
rm -r ./proto/cosmwasm

# Copy proto
buf export buf.build/cosmwasm/wasmd --exclude-imports --output ./proto

mkdir -p ./tmp-swagger-gen

# generate swagger files (filter query files)
buf generate --template ./proto/buf.gen.swagger.yaml

# combine swagger files
# uses nodejs package `swagger-combine`.
# all the individual swagger files need to be configured in `config.json` for merging
swagger-combine ./configs/config.json -o ./tmp-swagger-gen/swagger.yaml -f yaml --continueOnConflictingPaths true --includeDefinitions true

cp ./tmp-swagger-gen/swagger.yaml ./swagger.yaml

# clean swagger files
rm -r ./proto/cosmwasm
rm -r ./tmp-swagger-gen

# generate openapi
docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -g typescript-axios -i /local/swagger.yaml -o /local/src/openapi/

rm swagger.yaml
