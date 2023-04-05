const express = require("express");
const { connection } = require("./config/db");
const { dataRouter } = require("./routes/data.routes");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/data", dataRouter);

app.listen(process.env.PORT || 8080, async () => {
  try {
    await connection;
    console.log("Connected to DB");
    console.log(`Listening on PORT ${process.env.PORT}`);
  } catch (err) {
    console.log(err);
  }
});
