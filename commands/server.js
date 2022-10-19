const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  async execute(interaction) {
    const reply_msg_server = `
Server name: ${interaction.guild.name}\n
Total members: ${interaction.guild.memberCount}\n
Created at: ${interaction.guild.createdAt.toDateString()}\n
Boost count: ${interaction.guild.premiumSubscriptionCount}\n
Channels: ${interaction.guild.channels.cache.size}\n
Roles: ${interaction.guild.roles.cache.size}\n
Emojis: ${interaction.guild.emojis.cache.size}
    `;

    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Server info")
      .setDescription("```" + reply_msg_server + "```");
    await interaction.reply({ embeds: [embed] });
  },
};
