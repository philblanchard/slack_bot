const app = require("../app/app.js")

// var messageRouter = (message, sender, channel) => {
//     var uppercase = message.toUpperCase()
//     if (uppercase.includes("CHANGE CONCIERGE") || uppercase.includes("NEW CONCIERGE")){
//         app.topic(channel, `Current Concierge is: ${sender}`)
//     }

// }

var messageRouter = {
    router: function(message, sender, channel){
        var uppercase = message.toUpperCase()
        switch(uppercase){
            case 'CHANGE CONCIERGE':
                app.topic(channel, sender)
                break;
        }
    }
}

module.exports = messageRouter