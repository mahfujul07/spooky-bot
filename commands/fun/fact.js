const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fact")
    .setDescription("Sends a random fact!"),
  async execute(interaction) {
    const response = await fetch(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    const fact = await response.json();
    const embed = new EmbedBuilder()
      .setTitle("Random Fact")
      .setDescription(fact.text)
      .setColor("#cc2b5e")
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  },
};
