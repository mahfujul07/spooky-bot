const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  data: new SlashCommandBuilder()
    .setName("doge")
    .setDescription("Shows the current price of dogecoin"),
  async execute(interaction) {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd"
    );
    const data = await response.json();
    const embed = new EmbedBuilder()
      .setTitle("Dogecoin Price")
      .setDescription(`Current Price: ${data.dogecoin.usd}`)
      .setColor("#cc2b5e")
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  },
};
