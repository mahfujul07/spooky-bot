const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  data: new SlashCommandBuilder()
    .setName("slap")
    .setDescription("Slaps a user!")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to slap")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    const slap = await fetch("https://api.satou-chan.xyz/api/endpoint/slap")
      .then((res) => res.json())
      .then((json) => json);
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Slap")
      .setDescription(`${interaction.user} slapped ${user}`)
      .setImage(slap.url);
    await interaction.reply({ embeds: [embed] });
  },
};
