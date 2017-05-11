#!/bin/bash

# A script that takes a single command-line parameter which is the name of the
# file to serve. Ultimately, it should start the server you have built.

if [ "$1" != "" ]; then
    cd lineserver
    node $1
    echo "got here"
else
    echo "Please specify Node server definition."
fi
