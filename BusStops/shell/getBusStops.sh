#!/bin/sh

APIKEY="YOUR_API_KEY_Her"

curl --location 'https://api.agglo-larochelle.fr/production/yelo-api/bus-stops.json' \
--header "X-Cda-Lr-Api-Key: $APIKEY" > "${PWD}/BusStops.json"