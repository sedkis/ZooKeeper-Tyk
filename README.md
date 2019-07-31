# ZooKeeper & Tyk
Integrating ZooKeeper As Service Discovery with Tyk


## Steps / Prerequisites

### Zookeeper
   Just runs normally
   
### ZooRest (used to interact with ZooKeeper)
   Just runs normally
   
### API definition for ZooKeeper Service Discovery API (will return info about the microservice)
   We set up an API to talk to ZooRest and converts the data into a payload that can actually be used.  This is done by using a *Virtual Endpoint*, to which the source code is included in a JavaScript file in this repo.

### API definition for Microservice which will use Service Discovery with the aforementioned API
   A normal API definition that uses Service Discovery agent normally.  (behind the scenes of course Tyk is reverse proxying to the ZooRest API.
