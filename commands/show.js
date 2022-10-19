const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    const base = new Airtable({ apiKey: "keywtxbXnsRkAHWf9" }).base(
      "appwB2jkKjE9TCfuP"
    );

    base("users")
      .select({
        filterByFormula: `{user_id} = "${user.id}"`,
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log("Retrieved", record.get("name"));
          const embed = new EmbedBuilder()
            .setColor("#cc2b5e")
            .setTitle("User info")
            .setDescription(
              `**UserName:** ${record.get("name")}\n
              **user id:** ${record.get("user_id")}\n
              **Avatar:** ${record.get("avatar")}
              `
            );
          interaction.reply({ embeds: [embed] });
        });
      });
  },
};
