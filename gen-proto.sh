#!/usr/bin/env bash

rm -r ./tmp-proto
rm -r ./proto-thirdparty

mkdir ./tmp-proto ./proto-thirdparty

buf export buf.build/cosmwasm/wasmd --exclude-imports --output ./tmp-proto
buf export buf.build/cosmwasm/wasmd --output ./proto-thirdparty

proto_dirs=$(find ./tmp-proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
proto_files=()

for dir in $proto_dirs; do
  proto_files=("${proto_files[@]} $(find "${dir}" -maxdepth 1 -name '*.proto')")
done

npx pbjs \
  -o ./src/proto.cjs \
  -t static-module \
  --force-long \
  --keep-case \
  --no-create \
  --path=./tmp-proto/ \
  --path=./proto-thirdparty/ \
  --root="@cosmos-client/cosmwasm" \
  ${proto_files[@]}

npx pbjs \
  -o ./src/proto.js \
  -t static-module \
  -w es6 \
  --es6 \
  --force-long \
  --keep-case \
  --no-create \
  --path=./tmp-proto/ \
  --path=./proto-thirdparty/ \
  --root="@cosmos-client/cosmwasm" \
  ${proto_files[@]}

npx pbts \
  -o ./src/proto.d.ts \
  ./src/proto.js

rm -r ./tmp-proto
rm -r ./proto-thirdparty
