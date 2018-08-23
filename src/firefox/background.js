const utils = require("./utils/utils")

// will execute when the extension is first installed
browser.runtime.onInstalled.addListener(function() {
    // set uninstall url
    browser.runtime.setUninstallURL("https://docs.google.com/forms/d/1tfYAC8EBbAaTAjR_cLJI5j74Q7as52oEfLrLvjO7l-g");
})

// will start download when we get the message
browser.runtime.onMessage.addListener(function(args) {
    // error handeling
    try {
        // start the download process
        browser.downloads.download({
            "url": args.url,
            "filename": args.slug + ".mp4",
            "saveAs": false
        });
    } catch (e) {
        // notify the user when clip download fails
        utils.notify({
            name: "errorMessage", 
            type: "basic", 
            title: "Download failed", 
            message: `Download failed. Please reload and try again. \n\nError: "${e.message}"`
        })
    }
})