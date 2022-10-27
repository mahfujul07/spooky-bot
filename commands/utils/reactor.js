const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reactor")
    .setDescription("Reacts to a message with a specified emoji."),
  async execute(interaction, client) {
    const message = await interaction.reply({
      content: "React Here",
      fetchReply: true,
    });

    const emoji = client.guild.emojis.cache.find(
      (emoji) => emoji.id === "793875323628158986"
    );


    await message.react(emoji);

    const filter = (reaction, user) => {
      return (
        reaction.emoji.id === "793875323628158986" &&
        user.id === interaction.user.id
      );
    };

    const collector = message.createReactionCollector({ filter, time: 15000 });

    collector.on("collect", (reaction, user) => {
      console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
    });

    collector.on("end", (collected) => {
      console.log(`Collected ${collected.size} items`);
    });
  },
};
