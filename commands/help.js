const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Replies with a list of helpful commands."),
  async execute(interaction) { 

    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Help")
      .setDescription(
        "``` \n" +
          "Commands: \n\n" +
          "/server - Info about the server \n" +
          "/user - Info of the user \n" +
          "/avatar - avatar of user \n" +
          "/bot - Info about the bot \n" +
          "/quiz - Quiz questions \n" +
          "/slap - Slap a user \n" +
          "/kiss - Kiss a user \n" +
          "/pat - Pat a user \n" +
          "/joke - Sends a funny joke \n" +
          "/invite - Invite the bot to your server \n" +
          "/support - Join the support server \n" +
          "/github - Shows the github repo \n" +
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
  }
}