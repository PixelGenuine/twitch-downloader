/**
 * Much thanks to clipr.xyz for allowing me
 * to integrate clipr into Twitch Downloader,
 * without them, downloading vods straight from twitch.tv would not be possible.
 */

// globals
let id,
    baseUrl = "https://clipr.xyz/videos/"

/**
 * Gets the ID of the VOD
 * @param id
 */
function getId () {
    try {
        id = window.location.href.split("/")[4]
    } catch(e) {
        utils.notify({
            id: "vodDownloadError", 
            type: "basic", 
            title: "Download failed", 
            message: "Download failed. Please reload and try again."
        })
    }
}

module.exports = {
    // opens a new window to clipr
    download: function () {
        // get the id of the VOD
        getId()

        // opens a link to clipr, where the VOD can be downloaded.
        window.open(baseUrl + id)
    }
}