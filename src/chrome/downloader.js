// run the script after the page has fully loaded
// to avoid potential errors in the execution
window.addEventListener("load", function() {

        let html = document.createElement("div"),
        content = "<div class=\"tw-inline-flex\">" 
                + "<a href=\"\" class=\"tw-interactive tw-button\" id=\"download-btn\" download=\"clip.mp4\"><span class=\"tw-button__text\" data-a-target=\"tw-button-text\">Download Clip</span></a>"
                + "</div>"        

        let player = document.getElementsByClassName("player-video"),
                url = player[0].firstChild.getAttribute("src"),
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
        dlButton.setAttribute("href", url);
});
