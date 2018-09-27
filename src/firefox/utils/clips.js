// globals
let url,
    slug

/**
 * This will get the unique id of the clip
 * and assign it to the "slug" global
 * @param slug
 */
function getSlug() {
    // error handling
    try {
        // check which version of the twitch viewer is being used
        if (window.location.origin != "https://clips.twitch.tv") {
            slug = window.location.pathname.split("/")[3]
        } else {
            slug = window.location.pathname.split("/")[1]
        }
    } catch(e) {
        /**
         * if an error occurres
         * the slug is set to "clip" to keep the download process going
         */
        slug = "clip"
    }
        
    // just in case slug retrieval fails and no error is thrown
    if (slug == undefined || slug == null || slug == "") {
        slug = "clip"
    }
}

/**
 * This will get the host url of the clip
 * and assign it to the "url" global
 * @param url
 */
function getURL() {
    // select the video player
    let player = document.getElementsByClassName("player-video")

    url = player[0].firstChild.currentSrc

    // check if the url exists or not
    if (url == undefined || url == null || url == "") {
        url = false
    }
}

// export helper functions
module.exports = {
    // downloads clip
    download: function() {

        // self explanatory
        getURL()
        getSlug()

        // secondary safe gaurd to make sure we have the url
        if (!url) {
            // tries to get the url again after 50 ms
            setTimeout(getURL(), 50)
        } else {
            // tell firefox to start the download
            browser.runtime.sendMessage({"url": url, "slug": slug})
        }
    }
}
