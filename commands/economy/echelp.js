const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("echelp")
    .setDescription("Shows the help menu for the economy commands"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Economy Help Menu")
      .setDescription(
        "```md\n# Economy Commands\n\n# bal\nShows your balance\n\n# beg\nBeg for money\n\n# buy\nBuy an item\n\n# daily\nClaim your daily reward\n\n# deposit\nDeposit money into your bank\n\n# fish\nFish for money\n\n# leaderboard\nShows the leaderboard\n\n# pay\nPay someone money\n\n# rob\nRob someone\n\n# sell\nSell an item\n\n# shop\nShows the shop\n\n# withdraw\nWithdraw money from your bank\n\n# work\nWork for money\n\n# Database\n Saves Your Server to the Database```"
      );
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Invite")
          .setStyle(ButtonStyle.Link)
          .setURL(
            "https://discord.com/api/oauth2/authorize?client_id=1029119033108344843&permissions=1343524039751&scope=bot"
          )
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("Support")
          .setStyle(ButtonStyle.Link)
          .setURL("https://discord.gg/npcmpRmdTU")
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("Github")
          .setStyle(ButtonStyle.Link)
          .setURL("https://github.com/mahfujul07")
      );
    await interaction.reply({ embeds: [embed], components: [row] });
  },
};
