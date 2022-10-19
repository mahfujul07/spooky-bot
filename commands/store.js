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

    base("users").create(
      [
        {
          fields: {
            name: user.username + "#" + user.discriminator,
            user_id: user.id,
            avatar: user.displayAvatarURL({ dynamic: true, size: 512 }),
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    );
    await interaction.reply("User stored successfully");
  },
};
