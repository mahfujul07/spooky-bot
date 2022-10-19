const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("github")
    .setDescription("Replies with github link!"),
  async execute(interaction) {
    return interaction.reply("https://github.com/mahfujul07/spooky-bot");
  },
};
