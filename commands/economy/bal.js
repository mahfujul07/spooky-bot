const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const db = require("../../firebase");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bal")
    .setDescription("Shows your balance"),
    async execute(interaction) {
        const user = interaction.user;
        const docRef = db.collectionRef("users").doc(user.id);
        const doc = await docRef.get();
        if (!doc.exists) {
            await interaction.reply("You don't have an account yet!");
        } else {
            const embed = new EmbedBuilder()
            .setColor("#cc2b5e")
            .setTitle("Balance")
            .setDescription(
                "``` \n" +
                "Your balance is: " +
                doc.data().balance +
                "```"
            );
            await interaction.reply({ embeds: [embed] });
        }
        }
    }