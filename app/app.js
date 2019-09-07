console.log(require('dotenv').config({debug: true}));
const token = process.env.SLACK_BOT_TOKEN
const slack = require('slack')
const bot = new slack({token})

var app = {
    message: function(channel, text){
        bot.chat.postMessage({channel: `${channel}`, text:`${text}`}).catch(function(err){
            console.log(err)
        })
    },

    topic: function(channel, topic){
        bot.channels.setTopic({channel: `${channel}`, topic: `${topic}`}).catch(function(err){
            console.log(err)
        })
    }
}


module.exports = app