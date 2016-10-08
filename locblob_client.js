var grpc = require('grpc');
var locblob = grpc.load('locblob.proto').locblob;

function main() {
  var client = new locblob.CurrentLocationService('localhost:50051',
                                       grpc.credentials.createInsecure());
  var longitude;
  longitude = 52.12345;
  client.currentLocation({longitude: longitude}, function(err, response) {
    console.log('Longitude:', response.uid);
  });
}

main();
