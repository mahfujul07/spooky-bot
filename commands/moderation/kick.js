const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kicks a member from the server")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to kick")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reason")
        .setDescription("The reason for the kick")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    const reason = interaction.options.getString("reason");
    const member = interaction.guild.members.cache.get(user.id);
    if (member.kickable) {
      await member.kick(reason);
      await interaction.reply({
        content: `Successfully kicked ${user.tag}`,
      });
    } else {
      await interaction.reply({
        content: "I can't kick that user!",
      });
    }
  },
};
