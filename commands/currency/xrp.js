const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  data: new SlashCommandBuilder()
    .setName("xrp")
    .setDescription("Shows the current price of ripple"),
  async execute(interaction) {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd"
    );
    const data = await response.json();
    const embed = new EmbedBuilder()
      .setTitle("Ripple Price")
      .setDescription(`Current Price: ${data.ripple.usd}`)
      .setColor("#cc2b5e")
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  },
};
