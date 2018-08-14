<<<<<<< HEAD
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
=======
chrome.runtime.onInstalled.addListener(function() {
    // default settings
    let settings = {
        "filename": "clip",
        "includeCurrentDate": false,
        "showSaveToDialog": false
    }

    // set the defualt settings
    chrome.storage.local.set(settings, function() {
        console.log("settings saved");
    });
});

// start the download process
chrome.runtime.onMessage.addListener(function(arg, sender, sendResponse) {
    let url = arg,
        date = new Date(),
        filename

        getCurrentSettings().then(function(currentSettings) {
            // check if the "Include current date" setting is on or not
            // and execute accordingly
            if (currentSettings.includeCurrentDate) {
                // assemble current date to include as part of the filename
                let currentDate = date.getMonth() + "-" + date.getDate() + "-" + date.getFullYear()
                
                // set full filename
                filename = currentSettings.filename + ` (${currentDate})`
            } else {
                // set filename
                filename = currentSettings.filename 
            }
            
            // start the download
            try {
                chrome.downloads.download({
                    "url": url,
                    "saveAs": currentSettings.showSaveToDialog,
                    "filename": filename + ".mp4"
                });
            } catch {
                window.alert("Download failed. Reload the page and try again.")
            }
        });
});

function getCurrentSettings() {
    return new Promise(function(resolve) {
        chrome.storage.local.get(['filename', 'includeCurrentDate', 'showSaveToDialog'], function(currentSettings) {
            resolve(currentSettings);
            return currentSettings
        });
    });
}
>>>>>>> f9e01a340bf354e9a0ae2c0f190e8ab5faddba07
