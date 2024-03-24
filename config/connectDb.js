const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://ws-mongosse:ws-mongosse@cluster0.3asrfqg.mongodb.net/ "
    )
    .then(() => console.log("database connected!!"))
    .catch((err) => console.log(err));
};

module.export = connect;
