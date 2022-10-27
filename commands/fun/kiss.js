const {
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kiss")
    .setDescription("Kisses a user!")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to kiss")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    const kiss = await fetch("https://api.satou-chan.xyz/api/endpoint/kiss")
      .then((res) => res.json())
      .then((json) => json);
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Kiss")
      .setDescription(`${interaction.user} kissed ${user}`)
      .setImage(kiss.url);
    await interaction.reply({ embeds: [embed] });
  },
};
