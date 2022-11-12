const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reverse")
    .setDescription("Reverses a string!")
    .addStringOption((option) =>
      option
        .setName("string")
        .setDescription("The string to reverse")
        .setRequired(true)
    ),
  async execute(interaction) {
    const string = interaction.options.getString("string");
    const reversed = string.split("").reverse().join("");
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setDescription(`${reversed}`);
    await interaction.reply({ embeds: [embed] });
  },
};
