const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("leaderboard")
    .setDescription("Shows the leaderboard!"),
  async execute(interaction) {
    const reply_msg_leaderboard = `
1. user1 - 1000\n
2. user2 - 900\n
3. user3 - 800\n
4. user4 - 700\n
5. user5 - 600\n
6. user6 - 500\n
7. user7 - 400\n
8. user8 - 300\n
9. user9 - 200\n
10. user10 - 100\n
        `;
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Leaderboard")
      .setDescription("``` \n" + reply_msg_leaderboard + "```");
    await interaction.reply({ embeds: [embed] });
  },
};
