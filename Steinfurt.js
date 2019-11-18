function getCoordinates()
{
    'use strict';
    let API_KEY = '&key=AIzaSyCBbrF__S2CBD2DUkajmotIIA5gUGhpoVY';
    let Input = document.getElementById("Eingabe").value;
    let URL ='https://maps.googleapis.com/maps/api/geocode/json?address=' + Input + API_KEY;

   
    async function fetchJsonForUrl(url) 
    {
        let serverResponse 	= await fetch(url);
        let responseAsJson  = serverResponse.json();
        return responseAsJson;
    }
    
    fetchJsonForUrl(URL).then(function(geoObject) {
    let lat = geoObject.results[0].geometry.location.lat;
    let lng = geoObject.results[0].geometry.location.lng;
    let adresse =geoObject.results[0].formatted_address;
    Output2(adresse,lat,lng);
    });
                                 

}


function Output2(adresse,lat,lng)
{
    
    var tableRef = document.getElementById('outputtable').getElementsByTagName('tbody')[0];
    var newRow   = tableRef.insertRow();
    var newCell  = newRow.insertCell(0);
    var newText  = document.createTextNode(lat);
    newCell.appendChild(newText);
    var newCell  = newRow.insertCell(1);
    var newText  = document.createTextNode(lng);
    newCell.appendChild(newText);
    var newCell  = newRow.insertCell(2);
    var newText  = document.createTextNode(adresse);
    newCell.appendChild(newText);
}
