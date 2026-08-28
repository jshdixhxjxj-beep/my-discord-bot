const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const http = require('http');
http.createServer((req, res) => res.end('Bot is alive!')).listen(process.env.PORT || 3000);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('MTU0MjY0ODk4NDExMDM2Njg5MA.G4dZBP.viuhGKyvEjG-Ka3gNFJHRgzTyv9Gzsm8CgMic8');
