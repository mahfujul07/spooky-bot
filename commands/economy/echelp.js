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
      .setTitle("Help")
      .setDescription(
        "``` \n" +
            "Economy Commands \n" +
            " \n" +
            "bal - Shows your balance \n" +
            "daily - Gives you your daily coins \n" +
          "```"
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
