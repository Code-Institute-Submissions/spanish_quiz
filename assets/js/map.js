//Creates new map and defines the properties of the map //
function initMap() {
    const myLatLng = {
        lat: 53.31952608924311,
        lng: -6.2276343192623775
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: myLatLng,
    });

    /** Adds markers coordinates and text for the info window */

    const myMarks = [{
            "lat": 53.298750804089785,
            "lng": -6.178747830803757,
            "name": "HQ",
            "info": "This is our HQ, where we plan all our amazing events and create quizes to help you learn! Click the link below to see details of our Intercambio events"
        },
        {
            "lat": 53.33821423236237,
            "lng": -6.237388486160337,
            "name": "Intercambio",
            "info": "Here is where our intercambios take place every Monday and Friday"
        },
    ];

    // Sets InfoObj that will store the infomraton displayed in each info window //

    let InfoObj = [];

    /** Loops over myMark array of objects and adds content and animation */

    for (let i = 0; i < myMarks.length; i++) {
        let contentString = `<h3>${myMarks[i].name}</h3><p>${myMarks[i].info}</p><a href="https://donnaib.github.io/dublin_intercambio/events.html" target="_blank">Click me!</a>`;
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
            map: map,
            title: myMarks[i].name,
            animation: google.maps.Animation.DROP,
        });

        // Defines content and width of info window //

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

        // Closes other window and opens new window //

        marker.addListener('click', function() {
            closeOtherInfo();
            infowindow.open(map, marker);
            InfoObj[0] = infowindow;
        });

        // Closes and clears information on previous info windows //

        function closeOtherInfo() {
            if (InfoObj.length > 0) {
                InfoObj[0].set("marker", null)
                InfoObj[0].close();
                InfoObj[0].length = 0;
            }
        }
    }
}