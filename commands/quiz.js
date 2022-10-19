const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  data: new SlashCommandBuilder()
    .setName("quiz")
    .setDescription("Replies with quiz questions!"),
  async execute(interaction) {
    const question = await fetch(
      "https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((json) => json.results[0]);
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Quiz")
      .setDescription(
        `**Question:** ${question.question}\n\n**Answer:** ||${question.correct_answer}||`
      );
    await interaction.reply({ embeds: [embed] });
  },
};
