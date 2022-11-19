require("dotenv").config();
const fs = require("node:fs");
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { TOKEN, DATABASE_TOKEN } = process.env;
const { connect } = require("mongoose");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync("./functions");
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents("./events");
client.handleCommands("./commands");
client.login(TOKEN);
(async () => {
  await connect(DATABASE_TOKEN).catch((err) => console.log(err));
})();
