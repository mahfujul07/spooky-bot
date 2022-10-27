const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  data: new SlashCommandBuilder()
    .setName("spit")
    .setDescription("Spits on a user!")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to spit on")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    const spit = await fetch("https://api.satou-chan.xyz/api/endpoint/spit")
      .then((res) => res.json())
      .then((json) => json);
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Spit")
      .setDescription(`${interaction.user} spat on ${user}`)
      .setImage(spit.url);
    await interaction.reply({ embeds: [embed] });
  },
};
