chrome.runtime.onMessage.addListener(function(arg, sender, sendResponse) {
    let url = arg

    try {
        chrome.downloads.download({
            "url": arg,
            "saveAs": false,
            "filename": "clip.mp4"
        });
    } catch {
        window.alert("Download failed. Reload the page and try again.")
    }
    
});
