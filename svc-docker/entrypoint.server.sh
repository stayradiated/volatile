#!/bin/sh

graphile-migrate migrate

exec node ./index.js
