var grpc = require('grpc');
var locblob = grpc.load('locblob.proto').locblob;

function main() {
  var client = new locblob.CurrentLocationService('localhost:50051',
                                       grpc.credentials.createInsecure());
  var longitude = 52.12345;
  var latitude = 12.345;
  client.currentLocation({longitude: longitude, latitude: latitude}, function(err, response) {
    console.log('Longitude:', response.uid);
  });
}

main();
