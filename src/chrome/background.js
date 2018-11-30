const utils = require("./utils/utils")

// will execute when the extension is first installed
chrome.runtime.onInstalled.addListener(function() {
    // set uninstall url
    chrome.runtime.setUninstallURL("https://docs.google.com/forms/d/1tfYAC8EBbAaTAjR_cLJI5j74Q7as52oEfLrLvjO7l-g");
})

// will start download when we get the message
chrome.runtime.onMessage.addListener(function(args) {
    // error handeling
    try {
        // start the download process
        chrome.downloads.download({
            "url": args.url,
            "filename": args.slug + ".mp4",
            "saveAs": false
        })
        
    } catch (e) {
        // notify the user when clip download fails
        utils.notify({
            id: "downloadError", 
            type: "basic", 
            title: "Download failed", 
            message: "Download failed. Please reload and try again.",
            context: "Twitch Downloader"
        })
    }
})

// listen when the buttons on notification is clicked
chrome.notifications.onButtonClicked.addListener(function (id, btnIndex) {
    // check which button was clicked
    if (id === "downloadError" || btnIndex === 0) {
        
        /**
         * No need to specifiy a tab id
         * because it will default to the current active tab
         */
        chrome.tabs.reload()
    }
})