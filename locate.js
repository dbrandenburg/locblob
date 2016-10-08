if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(zeigePosition);
        } else {
            CurrentLocation.innerHTML = 'We\'re sorry. Your browser doesn\'t support geolocation';
          }
    function zeigePosition(position) {
        CurrentLocation.innerHTML = position.coords.latitude + " " + position.coords.longitude;
}
