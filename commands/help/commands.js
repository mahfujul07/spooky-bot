const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("commands")
    .setDescription("Shows all commands"),
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
          "/fact - Sends a random fact \n" +
          "/slap - Slap a user \n" +
          "/kiss - Kiss a user \n" +
          "/pat - Pat a user \n" +
          "/joke - Sends a funny joke \n" +
          "/invite - Invite the bot to your server \n" +
          "/support - Join the support server \n" +
          "/github - Shows the github repo \n" +
          "```"
      );

    await interaction.reply({ embeds: [embed], components: [row] });
  },
};
