#!/bin/bash

./mslclient.sh -int true -cfg mslcli.cfg -url http://localhost:8080/msl -eid client3 -uid user1 -uas EMAIL_PASSWORD -eas NONE -kx ASYMMETRIC_WRAPPED -kxm JWE_RSA "$@"
exit $?
