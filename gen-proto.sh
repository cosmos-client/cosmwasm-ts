#!/usr/bin/env bash
git submodule update --init --recursive

rm -r ./proto
rm -r ./proto-thirdparty
cp -r ./chain/proto ./proto
cp -r ./chain/third_party/proto ./proto-thirdparty

proto_dirs=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
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
  --path=./proto/ \
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
  --path=./proto/ \
  --path=./proto-thirdparty/ \
  --root="@cosmos-client/cosmwasm" \
  ${proto_files[@]}

npx pbts \
  -o ./src/proto.d.ts \
  ./src/proto.js

rm -r ./proto
rm -r ./proto-thirdparty
