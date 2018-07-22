/**
 * Created by User on 7/21/2018.
 */

var map;
var positionCurrent;

var trucks = [
    {lat: 47, lng: -87.6},
    {lat: 41.88, lng: -87.63},
    {lat: 43.56, lng: -88.01},
    {lat: 41.92, lng: -87.64}
];


// $.get("https://us-central1-uscrm-app.cloudfunctions.net/dumbFunction?num=5", function(data, status){
//     alert("Data: " + data + "\nStatus: " + status);
//     alert("hu");
// });

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2.75,
        center: {lat: 0, lng: 0},
        //disableDefaultUI: true
        zoomControl: false,
        scaleControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
    });

    infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };

            positionCurrent = pos;
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: pos,
                //  disableDefaultUI: true,
                //  zoomControl: false,
                //  scaleControl: true,
                // // mapTypeControl: false,
                //  streetViewControl: false,
                //  rotateControl: false,
                //  fullscreenControl: true,
                //  mapTypeControl: true,
                //  mapTypeControlOptions: {
                //      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                //      mapTypeIds: ['roadmap', 'carefrfe', '10', '20']
                //  }
            });



            var contentString1 = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Ice Cream Truck</h1>' +
                '<div id="bodyContent">' +
                '<p><b>Name:</b> Jenis Splendid Ice Creams' +
                '<p><b>Phone Number:</b> (773) 799-8809' +
                //'<p><b>Company Website:</b> <a href="http://johnnywaity.com/">johnnywaity.com</a>' +
                '</div>' +
                '</div>';
             var infowindow1 = new google.maps.InfoWindow({
                content: contentString1
            });

            var image = {
                url: 'Resources/iceCreamTruck.png',
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(50, 40)
            };


            var marker = new google.maps.Marker({
                position:{lat: 41.8857931, lng: -87.6354013},
                map: map,
                icon: image,
                animation: google.maps.Animation.DROP,
            });
            marker.addListener('click', function () {
                infowindow1.open(map, marker);
            });

            var contentString2 = '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h1 id="firstHeading" class="firstHeading">Ice Cream Truck</h1>' +
                '<div id="bodyContent">' +
                '<p><b>Name:</b> Ghirardelli Ice Cream' +
                '<p><b>Phone Number:</b>  (312) 923-0168' +
                //'<p><b>Company Website:</b> <a href="http://johnnywaity.com/">johnnywaity.com</a>' +
                '</div>' +
                '</div>';
            var infowindow2 = new google.maps.InfoWindow({
                content: contentString2
            });
            var marker1 = new google.maps.Marker({
                position:{lat: 41.8819603, lng: -87.6376387},
                map: map,
                icon: image,
                animation: google.maps.Animation.DROP,
            });
            marker1.addListener('click', function () {
                infowindow2.open(map, marker1);
            });

            //infoWindow.setPosition(pos);
            //infoWindow.setContent('Location found.');
            //infoWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());

        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
    //drop();
    // findTrucks();
}
// function drop() {
//     alert("efhu");
//     clearMarkers();
//     alert(trucks.length);
//     for (var i = 0; i < trucks.length; i++) {
//         addMarkerWithTimeout(trucks[i], i * 200);
//         // alert("lat:" +  trucks[i].lat+ " " + "lng:"+ trucks[i].lng);
//         // markers.push(new google.maps.Marker({
//         //     position: {lat: trucks[i].lat, lng: trucks[i].lng},
//         //     map: map,
//         //     icon: image,
//         //     animation: google.maps.Animation.DROP,
//         // }));
//     }
// }
// function addMarkerWithTimeout(position, timeout) {
//     window.setTimeout(function () {
//         markers.push(new google.maps.Marker({
//             position: position,
//             map: map,
//             animation: google.maps.Animation.DROP
//         }));
//     }, timeout);
// }
// function clearMarkers() {
//     for (var i = 0; i < markers.length; i++) {
//         markers[i].setMap(null);
//     }
//     markers = [];
// }
// function findTrucks() {
//     setInterval(function () {
//         $.get("https://us-central1-uscrm-app.cloudfunctions.net/dumbFunction?num=" + positionCurrent, function (data, status) {
//             alert("Data: " + data + "\nStatus: " + status);
//             //alert("hu");
//         });
//     }, 5000);
// }
//
//
