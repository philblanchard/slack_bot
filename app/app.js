console.log(require('dotenv').config({debug: true}));
const token = process.env.SLACK_BOT_TOKEN
const usertoken = process.env.SLACK_USER_TOKEN

const slack = require('slack')
const bot = new slack({token})
const user = new slack({usertoken})

const regex = /<@\w+>/
var app = {
    message: function(channel, text){
        console.log(`the channel is ${channel} \n the message is ${text}`)
        match = text.match(regex)
        console.log(`the match is ${match}`)
        bot.chat.postMessage({channel: `${channel}`, text:`The concierge is: ${match}`}).catch(function(err){
            console.log(err)
        })
    },

    topic: function(channel, topic){
        user.channels.setTopic({token: usertoken, channel: `${channel}`, topic: `${topic}`}).catch(function(err){
            console.log(err)
        })
    }
}


module.exports = app