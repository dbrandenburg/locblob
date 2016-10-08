
var grpc = require('grpc');
var locblob = grpc.load('locblob.proto').locblob;

function currentLocation(call, callback) {
  console.log('Longitude:' + call.request.longitude)
  console.log('Latitude:' + call.request.latitude)
  callback(null, {uid: 'dasijo02j'});
}

function main() {
  var server = new grpc.Server();
  server.addProtoService(locblob.CurrentLocationService.service,
                         {currentLocation: currentLocation});
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
