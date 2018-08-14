const errors = require("./utils/errors")

// will execute when the extension is first installed
browser.runtime.onInstalled.addListener(function () {
    // set uninstall url
    browser.runtime.setUninstallURL("https://docs.google.com/forms/d/1tfYAC8EBbAaTAjR_cLJI5j74Q7as52oEfLrLvjO7l-g")
})

// will start download when we get the message
browser.runtime.onMessage.addListener(function (args) {
    // error handeling
    try {
        // start the download process
        browser.downloads.download({
            "url": args.url,
            "filename": args.slug + ".mp4",
            "saveAs": false
        })
    } catch (e) {
        // report errors to the Twitter error tracking bot @ErrorsTracker
        // read errors.js for more info on when the error reporter will be working
        //errors.report(e.message)
    }
})