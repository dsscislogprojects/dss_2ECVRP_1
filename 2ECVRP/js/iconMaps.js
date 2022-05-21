
///////////////////////////////////////////////////////////////
///////////////  VARS FOR 4K AND FULL HD //////////////////////
///////////////////////////////////////////////////////////////

ICON_SIZE 	= 160;

// Set configs do Mapa
var setView_Config = {scrollWheelZoom:true}

// Estilos de Maps
var MapStreetLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v10',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoiam9zZWNydXo1NyIsImEiOiJjbDE0Mmt3a3YwNm1rM2pvanRjZHEwaXBpIn0.djStJvKMD2ecoT1DMsUICQ'
    })
var MapDarkLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/dark-v9',
        tileSize: 512,
        zoomOffset: -1,
		scrollWheelZoom:false,
        accessToken: 'pk.eyJ1Ijoiam9zZWNydXo1NyIsImEiOiJjbDE0Mmt3a3YwNm1rM2pvanRjZHEwaXBpIn0.djStJvKMD2ecoT1DMsUICQ'
    })
	

// Icones
//'common_components/img/factory/recife.png'

function icon_Define_by_Img(sIMG, classDefine){
	// sIMG: Diretorio da Imagem do Icone
	// classDefine: Classe de identificação do Icone (Factory, Hub, Costumer, ...)
	
	return L.divIcon({
		iconSize: new L.Point(ICON_SIZE, ICON_SIZE/2.825),
		iconAnchor: new L.Point(-1, 50),
		html:   "<img src='" + sIMG + "' style='max-width:100% !important;' />",
		className: "leaflet-div-icon " + classDefine
	});
}


var greenIcon = new L.Icon({
	  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
	  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	  iconSize: [25, 41],
	  iconAnchor: [12, 41],
	  popupAnchor: [1, -34],
	  shadowSize: [41, 41]
	});
	
var redIcon = new L.Icon({
	  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
	  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	  iconSize: [25, 41],
	  iconAnchor: [12, 41],
	  popupAnchor: [1, -34],
	  shadowSize: [41, 41]
	});
var blueIcon = new L.Icon({
	  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
	  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	  iconSize: [25, 41],
	  iconAnchor: [12, 41],
	  popupAnchor: [1, -34],
	  shadowSize: [41, 41]
	});
	