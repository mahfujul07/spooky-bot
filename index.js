const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
// Require the necessary discord.js classes
const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready! Logged in as " + client.user.tag);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  // get the bot ping
  if (commandName === "ping") {
    await interaction.reply(`Ping: ${client.ws.ping}ms`);
  }

  // help command
  if (commandName === "help") {
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Help")
      .setDescription(
        "``` \n" +
          "Commands: \n\n" +
          "/ping - Showes Ping of the Bot \n" +
          "/server - Info about the server \n" +
          "/user - Info of the user \n" +
          "/avatar - avatar of user \n" +
          "/kick - kicks a member \n" +
          "/ban - ban a member \n" +
          "/mute - mute a member \n" +
          "/unmute - unmute a member \n" +
          "/help - get help commands \n" +
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
          .setURL("https://discord.gg/invite")
      )
      .addComponents(
        new ButtonBuilder()
          .setLabel("Github")
          .setStyle(ButtonStyle.Link)
          .setURL("https://github.com/mahfujul07")
      );
    await interaction.reply({ embeds: [embed], components: [row] });
  }

  // server info
  if (commandName === "server") {
    const reply_msg_server = `
    Server name: ${interaction.guild.name}\n
    Total members: ${interaction.guild.memberCount}\n
    Created at: ${interaction.guild.createdAt.toDateString()}\n
    Boost count: ${interaction.guild.premiumSubscriptionCount}\n
    Channels: ${interaction.guild.channels.cache.size}\n
    Roles: ${interaction.guild.roles.cache.size}\n
    Emojis: ${interaction.guild.emojis.cache.size}
    `;

    const embed = new EmbedBuilder()
      .setTitle("Server info")
      .setDescription("```" + reply_msg_server + "```");
    await interaction.reply({ embeds: [embed] });
  }

  // user info
  else if (commandName === "user") {
    const reply_msg_user = `
      Your tag: ${interaction.user.tag}\n
      Your id: ${interaction.user.id}\n
      Member since: ${interaction.member.joinedAt}\n
      Roles: ${interaction.member.roles.cache.size}
      `;
    const embed = new EmbedBuilder()
      .setTitle("User info")
      .setDescription("``` \n" + reply_msg_user + "```");
    await interaction.reply({ embeds: [embed] });
  }

  // avatar
  else if (commandName === "avatar") {
    await interaction.reply(interaction.user.displayAvatarURL());
  }

  // say
  else if (commandName === "say") {
    const text = interaction.options.getString("text");
    await interaction.reply(text);
  }

  // bot info
  else if (commandName === "bot") {
    const reply_msg_bot = `
    Bot name: ${client.user.tag}\n
    Bot id: ${client.user.id}\n
    Created at: ${client.user.createdAt.toDateString()}\n
    Bot version: 1.0.0\n
    `;
    const embed = new EmbedBuilder()
      .setTitle("Bot info")
      .setDescription("``` \n" + reply_msg_bot + "```");
    await interaction.reply({ embeds: [embed] });
  }

  // get bot invite link
  else if (commandName === "invite") {
    await interaction.reply(
      "https://discord.com/api/oauth2/authorize?client_id=1029119033108344843&permissions=1343524039751&scope=bot"
    );
  }

  // get bot support server link
  else if (commandName === "support") {
    await interaction.reply("https://discord.gg/npcmpRmdTU");
  }

  // get bot github link
  else if (commandName === "github") {
    await interaction.reply("https://github.com");
  }

  // get the bot uptime
  else if (commandName === "uptime") {
    await interaction.reply(`Uptime: ${ms(client.uptime)}`);
  }

  // get the bot owner
  else if (commandName === "owner") {
    await interaction.reply(`Owner: Mahfujul07#0001`);
  }

  // fun command to show random joke
  else if (commandName === "joke") {
    const joke = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    )
      .then((res) => res.json())
      .then((json) => json);
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setTitle("Joke")
      .setDescription(
        `**Joke:** ${joke.setup}\n\n**Answer:** ${joke.punchline}`
      );
    await interaction.reply({ embeds: [embed] });
    console.log(joke);
  }

  // kiss command
  else if (commandName === "kiss") {
    const user = interaction.options.getUser("user");
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setDescription(
        `**${interaction.user.username}** kissed **${user.username}**`
      )
      .setImage("https://media.tenor.com/P6LS9N3VoRwAAAAC/cat.gif");
    await interaction.reply({ embeds: [embed] });
  }

  // hug command
  else if (commandName === "hug") {
    const user = interaction.options.getUser("user");
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setDescription(
        `**${interaction.user.username}** hugged **${user.username}**`
      )
      .setImage(
        "https://media.tenor.com/a3ygKWVkK3oAAAAC/milky-mocha-bear.gif"
      );
    await interaction.reply({ embeds: [embed] });
  }

  // slap command
  else if (commandName === "slap") {
    const user = interaction.options.getUser("user");
    const embed = new EmbedBuilder()
      .setColor("#cc2b5e")
      .setDescription(
        `**${interaction.user.username}** slapped **${user.username}**`
      )
      .setImage("https://media.tenor.com/nbT_cwrKGjwAAAAC/baby-slap.gif");
    await interaction.reply({ embeds: [embed] });
  }
  

  console.log(interaction);
});

// Login to Discord with your client's token
client.login(token);
