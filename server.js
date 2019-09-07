require('dotenv').config()
const { createEventAdapter } = require('@slack/events-api');
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;
const slackEvents = createEventAdapter(slackSigningSecret);
const app = require("./app/app.js")


// Read the port from the environment variables, fallback to 3000 default.
const port = process.env.PORT || 3000;



slackEvents.on('message', (event) => {
    console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
    console.log(`${event.text}`)
    if (event.user){
      app.message(event.channel, event.text)
      app.topic(event.channel, event.text)
    }
    // app.topic(event.channel, `The new concierge is ${event.user}`)

  });



 
(async () => {
  // Start the built-in server
  const server = await slackEvents.start(port);
 
  // Log a message when the server is ready
  console.log(`Listening for events on ${server.address().port}`);
})();