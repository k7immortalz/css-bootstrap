//= require ../pages/application
//= require ./jquery.geocomplete.min

function geoCompleteContactPage() {
    jQuery("#contact_info_client_location")
        .geocomplete()
        .bind("geocode:result", function (event, result) {
            // console.log(result);
        });
}

function geoCompleteDemoPage() {
    jQuery("#contact_demo_client_location")
        .geocomplete()
        .bind("geocode:result", function (event, result) {
            // console.log(result);
        });
}

function enableGeoCompletion() {
    switch (window.location.pathname) {
        case '/contact':
            geoCompleteContactPage();
        case '/demo':
            geoCompleteDemoPage();
    }
}

// $(window).bind("load", enableGeoCompletion);

// window.onhashchange = function () {
//     //blah blah blah
//     onGeoLoadScripts();
// }