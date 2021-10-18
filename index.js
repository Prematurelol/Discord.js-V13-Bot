const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const { prefix, admins } = require('./settings/botconfig.json');
const { clientid, permissons } = require('./settings/botinvite.json');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('ready', () => {
  console.clear();
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.on('messageCreate', message => {
    if (message.content === 'invite') {
        message.reply(`https://discord.com/api/oauth2/authorize?client_id=${clientid}&permissions=${permissons}&scope=bot%20applications.commands`)
    }
});

client.login('YOUR TOKEN GOES HERE!');