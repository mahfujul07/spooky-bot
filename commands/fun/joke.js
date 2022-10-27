const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("joke")
    .setDescription("Replies with a joke!"),
  async execute(interaction) {
    const joke = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    )
      .then((res) => res.json())
      .then((json) => json);
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Joke")
      .setDescription(
        `**Joke:** ${joke.setup}\n\n**Answer:** ||${joke.punchline}||`
      );
    await interaction.reply({ embeds: [embed] });
  },
};
