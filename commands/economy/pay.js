const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const Balance = require("../../schemas/balance");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pay")
    .setDescription("Pay someone")
    .addUserOption((option) =>
      option.setName("user").setDescription("The user to pay").setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName("amount")
        .setDescription("The amount to pay")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const userStoredBalance = await client.fetchBalance(
      interaction.user.id,
      interaction.guild.id
    );
    const amount = interaction.options.getNumber("amount");
    const selectedUser = interaction.options.getUser("user");

    if (selectedUser.bot || selectedUser.id === interaction.user.id)
      return await interaction.reply({
        content: "You can't pay a bot or yourself!",
        ephemeral: true,
      });
    else if (amount < 1.0)
      return await interaction.reply({
        content: "You can't pay less than $1.00!",
        ephemeral: true,
      });
    else if (amount > userStoredBalance.amount)
      return await interaction.reply({
        content: "You don't have enough money to pay that amount!",
        ephemeral: true,
      });
    else {
      const selectedUserBalance = await client.fetchBalance(
        selectedUser.id,
        interaction.guild.id
      );

      amount = await client.toFixedNumber(amount);

      await Balance.findOneAndUpdate(
        {
          _id: selectedUserBalance._id,
        },
        {
          balance: await client.toFixedNumber(
            selectedUserBalance.balance + amount
          ),
        }
      );

      await interaction.reply({
        content: `You paid ${selectedUser.username} $${amount}!`,
      });
    }
  },
};
