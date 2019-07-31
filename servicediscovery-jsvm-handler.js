function myVirtualHandler (request, session, config) {
    log(JSON.stringify(request))
    
    //Make api call to ZooKeeper
    zookeeperRequest = {
      "Method": "GET",
      "Domain": "http://127.0.0.1:8889",
      "resource": "/v1/get/zk_tyk"
    };
    var zookeeperResponse = TykMakeHttpRequest(JSON.stringify(zookeeperRequest));
    var usableResponse = JSON.parse(zookeeperResponse);
    var zookeeperData = JSON.parse(usableResponse.Body);
      
    // Decode the Base64 Data frm ZooKeeper into String Value
    var response = {
      Body: b64dec(zookeeperData.data),
      Code: 200
    }
      
    return TykJsResponse(response, session.meta_data)
  }