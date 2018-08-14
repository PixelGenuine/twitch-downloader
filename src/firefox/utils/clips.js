const errors = require("./errors")

let methods = {
    // get the unique id of a clip
    getSlug: function (data) {
        let slug

        // error handling
        try {
            // check which version of the twitch viewer is being used
            if (data.origin != "https://clips.twitch.tv") {
                slug = data.pathname.split("/")[3]
            } else {
                slug = data.pathname.split("/")[1]
            }
        } catch (e) {
            /**
             * if an error occurres
             * the slug is set to "clip" to keep the download process going
             */
            slug = "clip"

            // report the error
            //errors.report(e.message)
        }

        // just in case slug retrieval fails and no error is thrown
        if (slug == undefined || slug == "") {
            slug = "clip"
        }

        return slug
    }
}

module.exports = methods