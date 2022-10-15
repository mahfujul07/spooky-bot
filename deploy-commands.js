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
    .setName("hug")
    .setDescription("Hugs a user!")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to hug")
        .setRequired(true)
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
    .setDescription("Replies with user avatar!"),

  new SlashCommandBuilder()
    .setName("say")
    .setDescription("Says a message!")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to say")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("uptime")
    .setDescription("Shows the uptime of the bot!"),

  new SlashCommandBuilder()
    .setName("owner")
    .setDescription("Shows the owner of the bot!"),

  // new SlashCommandBuilder()
  //   .setName("balance")
  //   .setDescription("Shows your balance!"),

  // new SlashCommandBuilder().setName("beg").setDescription("Beg for money!"),

  // new SlashCommandBuilder()
  //   .setName("daily")
  //   .setDescription("Get your daily money!"),

  // new SlashCommandBuilder()
  //   .setName("deposit")
  //   .setDescription("Deposit money!")
  //   .addIntegerOption((option) =>
  //     option
  //       .setName("amount")
  //       .setDescription("The amount of money to deposit")
  //       .setRequired(true)
  //   ),

  // new SlashCommandBuilder()
  //   .setName("withdraw")
  //   .setDescription("Withdraw money!")
  //   .addIntegerOption((option) =>
  //     option
  //       .setName("amount")
  //       .setDescription("The amount of money to withdraw")
  //       .setRequired(true)
  //   ),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(token);

rest
  .put(Routes.applicationCommands(clientId), { body: commands })
  .then((data) =>
    console.log(`Successfully registered ${data.length} application commands.`)
  )
  .catch(console.error);
