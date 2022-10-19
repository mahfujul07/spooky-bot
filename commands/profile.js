// currency bot profile command
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("profile")
    .setDescription("Shows your profile!")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to show profile")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    const reply_msg_profile = `
User name: ${user.tag}\n
User id: ${user.id}\n
User created at: ${user.createdAt.toDateString()}\n
        `;
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Profile")
      .setDescription("``` \n" + reply_msg_profile + "```");
    await interaction.reply({ embeds: [embed] });
  },
};
