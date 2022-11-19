const Balance = require("../../schemas/balance");
const { Types } = require("mongoose");

module.exports = (client) => {
  client.fetchBalance = async (userId, guildId) => {
    let storedBalance = await Balance.findOne({
      userId: userId,
      guildId: guildId,
    });

    if (!storedBalance) {
      storedBalance = await new Balance({
        _id: Types.ObjectId(),
        userId: userId,
        guildId: guildId,
      });

      await storedBalance
        .save()
        .then(async (balance) => {
          console.log(
            `[Balance Created]: User: ${balance.userId} in ${balance.guildId}`
          );
        })
        .catch((err) => {
          console.log(err);
        });
      return storedBalance;
    } else {
      return storedBalance;
    }
  };
};
