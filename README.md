# ZooKeeper & Tyk
Integrating ZooKeeper As Service Discovery with Tyk.  

## Why's it necessary?
A bit of a hack is involved because ZooKeeper is pretty old.  No out of the box REST, and serves all Node data as Base64.

## How's it work?
1. First, we standup ZooREST in front of ZooKeeper so we can interact with a REST API.  
2. Then, we configure Tyk to talk to ZooREST.  Tyk will take the Base64 Encoded data and use a virtual endpoint to decode it into JSON.
3. We can now use the Tyk API in step #2 as the interface for the Service Discovery.  Just consume as normal.

## Steps / Prerequisites

### Zookeeper
   Just runs normally
   
### ZooRest (used to interact with ZooKeeper)
   Just runs normally
   
### API definition for ZooKeeper Service Discovery API (will return info about the microservice)
   We set up an API to talk to ZooRest and converts the data from Base64 Encoded to JSON so that it can be used in service discovery.  This is done by using a *Virtual Endpoint*, to which the source code is included in a JavaScript file in this repo.

### API definition for Microservice which will use Service Discovery with the aforementioned API
   A normal API definition that uses Service Discovery agent normally.
