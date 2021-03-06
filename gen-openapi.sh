#!/usr/bin/env bash

rm swagger.yaml
cp ~/src/github.com/CosmWasm/wasmd/docs/client/swagger-ui/swagger.yaml ./swagger.yaml

docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -g typescript-axios -i /local/swagger.yaml -o /local/src/openapi/

rm swagger.yaml
