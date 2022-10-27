const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  data: new SlashCommandBuilder()
    .setName("whois")
    .setDescription("Shows the info of a website!")
    .addStringOption((option) =>
      option
        .setName("url")
        .setDescription("The url of the website")
        .setRequired(true)
    ),
  async execute(interaction) {
    const url = interaction.options.getString("url");
    const response = await fetch(
      `https://api.hackertarget.com/whois/?q=${url}`
    );
    const data = await response.text();
    const embed = new EmbedBuilder()
      .setTitle("Whois")
      .setDescription(data)
      .setColor("#cc2b5e")
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  },
};
