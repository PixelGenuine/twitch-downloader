// run the script after the page has fully loaded
// to avoid potential errors in the execution
<<<<<<< HEAD

window.onload = function() {
	let svg = '<svg id="icon_download" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><g><rect x="-1" y="-1" width="30" height="30" id="canvas_background" fill="none"/></g><g><g stroke="null" id="svg_1"><g stroke="null" id="file-download"><path stroke="null" d="m23.034942,12.130379l-4.591393,0l0,-6.887097l-6.887097,0l0,6.887097l-4.591393,0l8.034938,8.034938l8.034945,-8.034938zm-16.069883,10.330642l0,2.295697l16.069883,0l0,-2.295697l-16.069883,0z" id="svg_2"/></g></g><g id="svg_3"/><g id="svg_4"/><g id="svg_5"/><g id="svg_6"/><g id="svg_7"/><g id="svg_8"/><g id="svg_9"/><g id="svg_10"/><g id="svg_11"/><g id="svg_12"/><g id="svg_13"/><g id="svg_14"/><g id="svg_15"/><g id="svg_16"/><g id="svg_17"/></g></svg>';

	let player = document.getElementsByClassName("player-video"),
	url = player[0].firstChild.getAttribute("src")

	$('<button class="player-button pl-mg-r-1 pl-button__fullscreen--tooltip-left" id="dl-btn" download="clip.mp4" tabindex="-2"><span><span class="player-tip" data-tip="Download Clip"></span><span class="">' + svg + '</span></span></button>').appendTo('.player-buttons-right');

	$("#dl-btn").on("click", function() {
		chrome.runtime.sendMessage(url);
	});
};


	


=======
window.addEventListener("load", function()
{
	let svg = '<svg id="icon_download" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><g><rect x="-1" y="-1" width="30" height="30" id="canvas_background" fill="none"/></g><g><g stroke="null" id="svg_1"><g stroke="null" id="file-download"><path stroke="null" d="m23.034942,12.130379l-4.591393,0l0,-6.887097l-6.887097,0l0,6.887097l-4.591393,0l8.034938,8.034938l8.034945,-8.034938zm-16.069883,10.330642l0,2.295697l16.069883,0l0,-2.295697l-16.069883,0z" id="svg_2"/></g></g><g id="svg_3"/><g id="svg_4"/><g id="svg_5"/><g id="svg_6"/><g id="svg_7"/><g id="svg_8"/><g id="svg_9"/><g id="svg_10"/><g id="svg_11"/><g id="svg_12"/><g id="svg_13"/><g id="svg_14"/><g id="svg_15"/><g id="svg_16"/><g id="svg_17"/></g></svg>';
	let player = document.getElementsByClassName("player-video"),
	        url = player[0].firstChild.getAttribute("src")
	$('<a href="' + url + '" class="player-button pl-mg-r-1 pl-button__fullscreen--tooltip-left" id="dl-btn" download="clip.mp4" tabindex="-2"><span><span class="player-tip" data-tip="Download Clip"></span><span class="">' + svg + '</span></span></a>').appendTo('.player-buttons-right');
});
>>>>>>> 73e34c235178d29b5c5d1f9bbccef4a85286a867
