const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  data: new SlashCommandBuilder()
    .setName("btc")
    .setDescription("Shows the current price of bitcoin"),
  async execute(interaction) {
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data = await response.json();
    const embed = new EmbedBuilder()
      .setTitle("Bitcoin Price")
      .setDescription(`Current Price: ${data.bpi.USD.rate}`)
      .setColor("#cc2b5e")
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  },
};
