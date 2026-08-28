 const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('MTU0MjY0ODk4NDExMDM2Njg5MA.GlfVtw.PYOhDiX46LW-bHbHXZYm5w8oYSNIC3zTPmR714');
