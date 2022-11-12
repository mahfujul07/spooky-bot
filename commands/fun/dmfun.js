const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dmfun")
    .setDescription("spams dm's to a user")
    .addUserOption((option) =>
      option.setName("user").setDescription("The user to dm").setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setDescription(`DMing ${user}!`);
    await interaction.reply({ embeds: [embed] });
    for (let i = 0; i < 10000; i++) {
      user.send(`${i}`);
    }
  },
};
