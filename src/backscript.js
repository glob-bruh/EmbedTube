
// *************
// * EmbedTube *
// *************

function waitForElement(elementId, callBack){
  window.setTimeout(function(){
    var element = document.getElementById(elementId);
    if(element){
      callBack(elementId, element);
    }else{
      waitForElement(elementId, callBack);
    }
  },500)
}
waitForElement("player",function(){
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