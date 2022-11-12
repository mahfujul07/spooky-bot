const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dot")
    .setDescription("Shows the current price of polkadot"),
  async execute(interaction) {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd"
    );
    const data = await response.json();
    const embed = new EmbedBuilder()
      .setTitle("Polkadot Price")
      .setDescription(`Current Price: ${data.polkadot.usd}`)
      .setColor("#cc2b5e")
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  },
};
