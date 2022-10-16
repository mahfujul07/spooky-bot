const { REST, SlashCommandBuilder, Routes } = require("discord.js");
const { clientId, token } = require("./config.json");

const commands = [
  new SlashCommandBuilder().setName("ping").setDescription("Showes bot ping"),

  new SlashCommandBuilder().setName("help").setDescription("Shows help!"),

  new SlashCommandBuilder().setName("bot").setDescription("Shows Bot Info"),

  new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),

  new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),

  new SlashCommandBuilder()
    .setName("slap")
    .setDescription("Slaps a user!")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to slap")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("kiss")
    .setDescription("Kisses a user!")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to kiss")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("pat")
    .setDescription("Pat a user!")
    .addUserOption((option) =>
      option.setName("user").setDescription("The user to pat").setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("joke")
    .setDescription("Sends a funny Joke!"),

  new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Invite the bot to your server!"),

  new SlashCommandBuilder()
    .setName("support")
    .setDescription("Join the support server!"),

  new SlashCommandBuilder()
    .setName("github")
    .setDescription("Shows the github repo!"),

  new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Shows the avatar of a user!")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to show avatar")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("owner")
    .setDescription("Shows the owner of the bot!"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(token);

rest
  .put(Routes.applicationCommands(clientId), { body: commands })
  .then((data) =>
    console.log(`Successfully registered ${data.length} application commands.`)
  )
  .catch(console.error);
