#!/bin/sh
docker build -t lower-thirds .
docker run -p 8080:8080 --rm --name lower-thirds -v ${PWD}:/home/node/app -w /home/node/app lower-thirds
