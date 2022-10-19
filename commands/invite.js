const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("Replies with invite link!"),
  async execute(interaction) {
    return interaction.reply(
      "https://discord.com/api/oauth2/authorize?client_id=1029119033108344843&permissions=1343524039751&scope=bot"
    );
  },
};
