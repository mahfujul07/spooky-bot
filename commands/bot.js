const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bot")
    .setDescription("Replies with bot info!"),
  async execute(interaction) {
    const reply_msg_bot = `
Bot name: ${interaction.client.user.tag}\n
Bot id: ${interaction.client.user.id}\n
Bot created at: ${interaction.client.user.createdAt.toDateString()}\n
Bot version: 1.0.0
    `;
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Bot info")
      .setDescription("``` \n" + reply_msg_bot + "```");
    await interaction.reply({ embeds: [embed] });
  },
};
