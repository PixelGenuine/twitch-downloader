// run the script after the page has fully loaded
// to avoid potential errors in the execution
<<<<<<< HEAD

window.onload = function() {
	const MIME_TYPE = "video/mp4",
		svg = '<svg id="icon_download" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><g><rect x="-1" y="-1" width="30" height="30" id="canvas_background" fill="none"/></g><g><g stroke="null" id="svg_1"><g stroke="null" id="file-download"><path stroke="null" d="m23.034942,12.130379l-4.591393,0l0,-6.887097l-6.887097,0l0,6.887097l-4.591393,0l8.034938,8.034938l8.034945,-8.034938zm-16.069883,10.330642l0,2.295697l16.069883,0l0,-2.295697l-16.069883,0z" id="svg_2"/></g></g><g id="svg_3"/><g id="svg_4"/><g id="svg_5"/><g id="svg_6"/><g id="svg_7"/><g id="svg_8"/><g id="svg_9"/><g id="svg_10"/><g id="svg_11"/><g id="svg_12"/><g id="svg_13"/><g id="svg_14"/><g id="svg_15"/><g id="svg_16"/><g id="svg_17"/></g></svg>'

	let html = document.createElement("button"),
	content = `"<span><span class="player-tip" data-tip="Download Clip"></span><span class="">' + ${svg} + '</span></span>"`        

	let player = document.getElementsByClassName("player-video"),
			url = player[0].firstChild.getAttribute("src"),
			tooltip = document.getElementsByClassName("player-buttons-right")[0]

	// set proper html attrs
	html.className = "player-button pl-mg-r-1 pl-button__fullscreen--tooltip-left"
	html.tabIndex = -2
	html.id = "dl-btn"
	html.innerHTML = content

	// add the download button to the sidebar
	tooltip.appendChild(html);

	// select the download button
	// and assign the video url to the "href" attr
	let dlButton = document.getElementById("dl-btn");

	// trigger the download function
	dlButton.addEventListener("click", function() {
		browser.runtime.sendMessage(url);
	});
};


	
=======
window.addEventListener("load", function() {
        const MIME_TYPE = "video/mp4"

        let html = document.createElement("div"),
        content = "<div class=\"tw-inline-flex\">" 
                + "<a href=\"\" class=\"tw-interactive tw-button\" id=\"download-btn\" download=\"clip.mp4\"><span class=\"tw-button__text\" data-a-target=\"tw-button-text\">Download Clip</span></a>"
                + "</div>"        

        let player = document.getElementsByClassName("player-video"),
                url = player[0].firstChild.getAttribute("src"),
                bb = new Blob([url], {type: MIME_TYPE}),
                sidebar = document.getElementsByClassName("clips-sidebar")[0].lastChild

        // add classes to the parent div 
        // and append the button html to it
        html.className = "tw-align-items-center tw-flex tw-justify-content-end tw-pd-1"
        html.innerHTML = content

        // add the download button to the sidebar
        sidebar.appendChild(html);

        // select the download button
        // and assign the video url to the "href" attr
        let dlButton = document.getElementById("download-btn");
        dlButton.setAttribute("href", window.URL.createObjectURL(bb));
});






>>>>>>> 73e34c235178d29b5c5d1f9bbccef4a85286a867
