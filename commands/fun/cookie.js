const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cookie")
    .setDescription("gives a cookie to a user")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to give a cookie to")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    const res = await fetch("https://api.satou-chan.xyz/api/endpoint/cookie");
    const json = await res.json();
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setDescription(`${interaction.user} gave ${user} a cookie`)
      .setImage(json.url);
    await interaction.reply({ embeds: [embed] });
  },
};
