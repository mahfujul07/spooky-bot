const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fetchBalance = require("../../functions/economy/fetchBalance");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("balance")
    .setDescription("Shows your balance")
    .addUserOption((option) =>
      option.setName("user").setDescription("The user to show the balance of")
    ),
  async execute(interaction, client) {
    const selectedUser =
      interaction.options.getUser("user") || interaction.user;
    const storedBalance = fetchBalance(selectedUser.id, interaction.guild.id);

    if (!storedBalance)
      return await interaction.reply({
        content: `${selectedUser.username} doesn't have a balance yet!`,
      });
    else {
      const embed = new EmbedBuilder()
        .setTitle(`${selectedUser.username}'s Balance`)
        .addFields({
          name: `${storedBalance.balance}`,
          value: `\u200b`,
        })
        .setColor("#cc2b5e");
      await interaction.reply({ embeds: [embed] });

      return;
    }
  },
};
