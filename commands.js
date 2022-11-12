const { REST, SlashCommandBuilder, Routes } = require("discord.js");
const { clientId, token } = require("./config.json");

const commands = [
  new SlashCommandBuilder().setName("help").setDescription("Shows help!"),

  new SlashCommandBuilder().setName("bot").setDescription("Shows Bot Info"),

  new SlashCommandBuilder()
    .setName("commands")
    .setDescription("Shows all commands"),

  new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),

  new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),

  new SlashCommandBuilder()
    .setName("quiz")
    .setDescription("Replies with quiz questions!"),

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

  // currency commands
  new SlashCommandBuilder()
    .setName("btc")
    .setDescription("Shows the current price of bitcoin"),

  new SlashCommandBuilder()
    .setName("eth")
    .setDescription("Shows the current price of ethereum"),

  new SlashCommandBuilder()
    .setName("ltc")
    .setDescription("Shows the current price of litecoin"),

  new SlashCommandBuilder()
    .setName("doge")
    .setDescription("Shows the current price of dogecoin"),

  new SlashCommandBuilder()
    .setName("xrp")
    .setDescription("Shows the current price of ripple"),

  new SlashCommandBuilder()
    .setName("ada")
    .setDescription("Shows the current price of cardano"),

  new SlashCommandBuilder()
    .setName("dot")
    .setDescription("Shows the current price of polkadot"),

  // economy commands
  new SlashCommandBuilder()
    .setName("echelp")
    .setDescription("Shows economy help!"),

  new SlashCommandBuilder()
    .setName("bal")
    .setDescription("Shows your balance!"),

  new SlashCommandBuilder()
    .setName("reverse")
    .setDescription("Reverses a string!")
    .addStringOption((option) =>
      option
        .setName("string")
        .setDescription("The string to reverse")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("dmfun")
    .setDescription("spams dm's to a user")
    .addUserOption((option) =>
      option.setName("user").setDescription("The user to dm").setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("nameme")
    .setDescription("Gives you a random name!"),

].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(token);

rest
  .put(Routes.applicationCommands(clientId), { body: commands })
  .then((data) =>
    console.log(`Successfully registered ${data.length} application commands.`)
  )
  .catch(console.error);
