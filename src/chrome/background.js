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