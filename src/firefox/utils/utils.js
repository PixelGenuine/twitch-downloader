/**
 * general purpose helper function(s)
 */

 module.exports = {
     /**
      * Basic notification system
      * powered by WebNotifications
      */
     notify: function(data) {
        browser.notifications.create(data.name, {
            "type": data.type,
            "iconUrl": "./logo-64.png",
            "title": data.title,
            "message": data.message
        })
     }
 }