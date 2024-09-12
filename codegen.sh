#!/usr/bin/env bash
#
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/api/cockburn.swagger.json \
    -g typescript-nestjs \
    -o /local/api/cockburn
