const axios = require("axios")

module.exports = {
    /**
     * Report errors to the Twitter bot @ErrorReportBot\
     * All errors are public info and freely accessable
     */
    report: function(error) {
        window.alert(error)
    }
}