const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pat")
    .setDescription("Pats a user!")
    .addUserOption((option) =>
      option.setName("user").setDescription("The user to pat").setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    const pat = await fetch("https://api.satou-chan.xyz/api/endpoint/pat")
      .then((res) => res.json())
      .then((json) => json);
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Pat")
      .setDescription(`${interaction.user} patted ${user}`)
      .setImage(pat.url);
    await interaction.reply({ embeds: [embed] });
  },
};
