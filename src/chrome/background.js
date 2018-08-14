const errors = require("./utils/errors")

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
        });
    } catch (e) {
        // report the error to the Twitter error tracking bot @ErrorsTracker
        //errors.report(e.message)

        window.alert("Download failed. Please reload and try again.");
    }
})
