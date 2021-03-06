const COORDS = 'coords';

function saveCoords(coordsObj) {

    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        //위에서 선언한것과 같으면 아래와 같이 선언 가능
       // latitude: latitude,
       latitude,
       // longitude: longitude
       longitude
    }

    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("Cant access geo location");
}
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null) {
        askForCoords();
    } else {
        // getWeather
    }
}

function init() {
    loadCoords();
}

init();