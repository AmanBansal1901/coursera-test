(function (window){
	
	var helloSpeaker={
		
	};
	var speakWord = "Hello";
	helloSpeaker.speak=function(nam){
  console.log(speakWord + " " + nam);
}
window.helloSpeaker=helloSpeaker;
})(window);
