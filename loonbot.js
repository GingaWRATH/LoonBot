const tmi = require('tmi.js');
require('dotenv').config();
fs = require('fs');
require('./lib/files');
require('./lib/users');
require('./cmds/commands');

const client = new tmi.Client({
    options: {debug: true},
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.OAUTH_TOKEN
    },
    channels: [process.env.CHANNEL_NAME]
});

// Connect to Twitch:
client.connect();

// Register our event handlers (defined below)
client.on('connected', function () {
    console.log('checking connected');
});

client.on('message', onMessageHandler);
client.on('message', (channel, tags, message, self) => {
    if (self) return;
});

client.on("chat", (channel, user, msg, self) => {
    if (self) return;
    //client.say(channel, `@${user['display-name']}, heya!`);
    return true;
});

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
    if (self) {
        return;
    } // Ignore messages from the bot

    msg = msg.trim();
    // Admin Only commands
    if (context['display-name'].toLowerCase() === process.env.CHANNEL_NAME.toLowerCase() || context['display-name'] === client.username) {
        result = adminCommands(msg);

        if (result !== false) {
            if (Array.isArray(result)) {
                client.say(target, result[0]);
            }
        } else {
            // VIP CMD
            if (msg.match(/^!vip\s+(.*)/g)) {

                let regexp = /^!vip\s+(.*)/g;

                const commandDetails = msg.matchAll(regexp);

                for (const match of commandDetails) {
                    vipUsername = match[1];
                }

                client.vip(target, vipUsername)
                    .then((data) => {
                        client.whisper(vipUsername, `Ginga has promoted you to VIP!`);
                    }).catch((err) => {
                    console.log('VIP issue : ' + err);
                });
            }
        }

    }
}