function showGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const ausgabe = "Breitengrad: " + position.coords.latitude + "\n" +
                    "Längengrad: " + position.coords.longitude + "\n" +
                    "Höhe: " + position.coords.altitude + "\n" +
                    "Exaktheit: " + position.coords.accuracy + "\n" +
                    "Exaktheit Höhe: " + position.coords.altitudeAccuracy + "\n" +
                    "Richtung: " + position.coords.heading + "\n" +
                    "Geschwindigkeit: " + position.coords.speed + "\n" +
                    "Zeitstempel: " + position.timestamp;

                alert(ausgabe);
            },
            function (error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        alert("User denied the request for Geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        alert("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        alert("The request to get user location timed out.");
                        break;
                    case error.UNKNOWN_ERROR:
                        alert("An unknown error occurred.");
                        break;
                }
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
window.onload = function () {
    showGeolocation();
};