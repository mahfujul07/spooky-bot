const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Replies with mentioned user's avatar."),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Avatar")
      .setDescription(
        `Here is the avatar of ${user.username}#${user.discriminator}`
      )
      .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }));
    await interaction.reply({ embeds: [embed] });
  },
};
