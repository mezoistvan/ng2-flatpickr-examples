#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

function doCompile {
  npm run build:travis
}

# Run our compile script
doCompile
