const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),
  async execute(interaction) {
    const reply_msg_user = `
Your tag: ${interaction.user.tag}\n
Your id: ${interaction.user.id}\n
Member since: ${interaction.member.joinedAt.toDateString()}\n
Roles: ${interaction.member.roles.cache.size}
      `;
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("User info")
      .setDescription("``` \n" + reply_msg_user + "```");
    await interaction.reply({ embeds: [embed] });
  },
};
