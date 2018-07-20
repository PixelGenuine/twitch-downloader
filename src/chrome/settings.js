let save = document.getElementById("save"),
    filename = document.getElementById("custom-filename"),
    includeCurrentDate = document.getElementById("current-date"),
    showSaveToDialog = document.getElementById("show-saveto"),
    errorDialog = document.getElementById("error-dialog"),
    successDialog = document.getElementById("success-dialog")

    getCurrentSettings().then(function(currentSettings) {
        filename.value = currentSettings.filename

        if(currentSettings.includeCurrentDate) {
            includeCurrentDate.checked = true
        } else {
            includeCurrentDate.checked = false
        }

        if(currentSettings.showSaveToDialog) {
            showSaveToDialog.checked = true
        } else {
            showSaveToDialog.checked = false
        }
    });

    filename.addEventListener("focus", function() {
        hideErrorDialog();
    });

save.addEventListener("click", function() {

    if (filename.value == "" && !includeCurrentDate.checked) {
        showErrorDialog("Filename cannot be empty. Please insert a name or enable the \"Include current date\" feature.");
    } else {

        // settings set by the user
        let settings = {
            "filename": filename.value,
            "includeCurrentDate": false,
            "showSaveToDialog": false
        }

        // setting the settings per the user's chosen options
        if (includeCurrentDate.checked) {
            settings.includeCurrentDate = true
        } 
        
        if (showSaveToDialog.checked) {
            settings.showSaveToDialog = true
        }

        // save settings to local storage
        chrome.storage.local.set(settings, function() {
            console.log("settings saved");
        });

        showSuccessDialog("Settings saved");
    } 
});

// get current settings
function getCurrentSettings() {
    return new Promise(function(resolve) {
        chrome.storage.local.get(['filename', 'includeCurrentDate', 'showSaveToDialog'], function(currentSettings) {
            resolve(currentSettings);
            return currentSettings
        });
    });
}

// super basic error dialog
// this is not the best solution, but its good enough for now.
function showErrorDialog(errorMsg) {
    errorDialog.innerHTML = `<i class="fas fa-times"></i> ` + errorMsg

    // check if the dialog is currently being showen or now
    if (errorDialog.classList.contains("hidden")) {
        errorDialog.classList.remove("hidden");
    } 
}

function hideErrorDialog() {
    if(!errorDialog.classList.contains("hidden")) {
        errorDialog.classList.add("hidden");
    }
}

function showSuccessDialog(successMsg) {
    successDialog.innerHTML = `<i class="fas fa-check-circle"></i> ` + successMsg

    // check if the dialog is currently being showen or now
    if (successDialog.classList.contains("hidden")) {
        successDialog.classList.remove("hidden");
    } 

    // after the dialog is showen
    // we wait 2 secs and remove it after the 2 secs has passed
    setTimeout(function(){
        if (!successDialog.classList.contains("hidden")) {
            successDialog.classList.add("hidden");
        } 
    }, 2500);
}


