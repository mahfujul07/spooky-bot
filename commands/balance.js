const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("balance")
    .setDescription("Shows your balance!")
    .addUserOption((option) =>
      option
        .setName("user")
        .setDescription("The user to show balance")
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    const reply_msg_balance = `
User name: ${user.tag}\n
User id: ${user.id}\n
User balance: 0
        `;
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Balance")
      .setDescription("``` \n" + reply_msg_balance + "```");
    await interaction.reply({ embeds: [embed] });
  },
};
