
// *************
// * EmbedTube *
// *************

function waitElement(elementId, callBack) {
  window.setTimeout(function(){
    var element = document.getElementById(elementId);
    if(element){
      callBack(elementId, element);
    }else{
      waitElement(elementId, callBack);
    }
  }, 500)
}
function waitClass(classname, callBack) {
  window.setTimeout(function(){
    var element = document.getElementsByClassName(classname);
    if(element){
      callBack(classname, element);
    }else{
      waitForElement(classname, callBack);
    }
  }, 1000)
}
waitClass("player", function() {
	console.log(
		"%cLoaded!", "color: red; font-style: bold; font-size:25px;",
	);
	var videoHeight = document.getElementById('player').clientHeight;
	var videoWidth = document.getElementById('player').clientWidth;
	document.getElementById('player').innerHTML = '';
	var newVidFrame = document.createElement('iframe');
	newVidFrame.width = videoWidth;
	newVidFrame.height = videoHeight;
	newVidFrame.style.borderRadius = "20px";
	newVidFrame.src = document.querySelector("meta[property='og:video:url']").getAttribute("content");
	document.getElementById('player').appendChild(newVidFrame);
});