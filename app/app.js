console.log(require('dotenv').config({debug: true}));
const token = process.env.SLACK_BOT_TOKEN

const slack = require('slack')
const bot = new slack({token})
const regex = /<@\w+>/
var app = {
    message: function(channel, text){
        console.log(`the channel is ${channel} \n the message is ${text}`)
        match = text.match(regex)
        console.log(`the match is ${match}`)
        bot.chat.postMessage({channel: `${channel}`, text:`${match}`}).catch(function(err){
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