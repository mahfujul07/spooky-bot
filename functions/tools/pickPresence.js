const { ActivityType } = require("discord.js");

module.exports = (client) => {
  client.pickPresence = async () => {
    const options = [
      {
        type: ActivityType.Streaming,
        text: "WITH RICK ASTLEY",
        status: "online",
        url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      },
    ];

    const option = Math.floor(Math.random() * options.length);

    client.user.setPresence({
      activities: [
        {
          name: options[option].text,
          type: options[option].type,
          url: options[option].url,
        },
      ],
      status: options[option].status,
      afk: false,
    });
  };
};
