function windchill{
var windsp= 5;
var temp= 76;
var windchil="N/A";
if(temp<= 10 && windsp>= 5){
var windchil= 35.74 + 0.6215*tempt - 35.75 * math.pow(windsp,0.16) + 0.4275*temp*(windsp,0.16);
}
else{
var windchil= "N/A";
}
document.getElementsById("windch").innerHtml= windchil;
}