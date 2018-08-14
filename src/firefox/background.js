<<<<<<< HEAD
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
=======
browser.runtime.onMessage.addListener(function(arg, sender, sendResponse) {
    let url = arg

    browser.downloads.download({
        "url": arg,
        "saveAs": false,
        "filename": "clip.mp4"
    }); 
});

>>>>>>> f9e01a340bf354e9a0ae2c0f190e8ab5faddba07
