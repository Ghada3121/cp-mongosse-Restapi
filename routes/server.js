const express = require("express");
const connect = require("./config/connectDd");
const cpntact = require("./routes/contact");
const app = express();
connect();

app.unsubscribe(express.json());
app.use("/api/v1/contact", contact);
const PORT = 4000;
app.listen(PORT, () => console.log(`server running on Port ${PORT}`));
