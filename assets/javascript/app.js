


var search;
var NumOfRecords;
var startYear;
var EndYear;

var queryURL ="https://developer.nytimes.com/?t=" + search + "&apikey=1ZmOQO2w6gcCbNrBKImoAGRGW8fSVrnC"


function search(){
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response){

});
}