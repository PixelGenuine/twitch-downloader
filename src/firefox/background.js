browser.runtime.onMessage.addListener(function(arg, sender, sendResponse) {
    let url = arg

    browser.downloads.download({
        "url": arg,
        "saveAs": false,
        "filename": "clip.mp4"
    }); 
});

