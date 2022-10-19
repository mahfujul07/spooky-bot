const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("support")
    .setDescription("Replies with support server link!"),
  async execute(interaction) {
    return interaction.reply("https://discord.gg/npcmpRmdTU");
  },
};
