/**
 * general purpose helper function(s)
 */

module.exports = {
    /**
     * Basic notification system
     * powered by WebNotifications
     */
    notify: function(data) {
       chrome.notifications.create(data.id, {
           "type": data.type,
           "iconUrl": "./logo-128.png",
           "title": data.title,
           "message": data.message,
           "contextMessage": data.context,
           "buttons": [{"title": "Reload", "iconUrl": "./reload.png"}]
       })
    }
}