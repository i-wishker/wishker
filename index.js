const { Client, GatewayIntentBits } = require('discord.js');
const { prefix } = require('./prefix')
const HelpCommand = require('./help') 
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

// Commands
  if(command === 'help'){
    HelpCommand.execute(message);
  }
});

client.login(process.env.TOKEN);
