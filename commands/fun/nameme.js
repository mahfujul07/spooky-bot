const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nameme")
    .setDescription("Gives you a random name!"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setDescription(
        `This name might fit you - ${
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15)
        }`
      );
    await interaction.reply({ embeds: [embed] });
  },
};
