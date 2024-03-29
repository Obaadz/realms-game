import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";
import v1Routes from "./routes/v1/index";

config({ path: ".env.local" });

const PORT = process.env.PORT || 5000,
  DB_URI = process.env.DB_URI || "",
  LEVELS = [0, 0, 150, 480, 1080, 1970, 3070, 4380, 6190, 8510, 11280, 1362000];

const app = express();
const bodyParser = {
  urlencoded: express.urlencoded({ limit: "5mb", extended: true }),
  json: express.json({ limit: "5mb" }),
};

app.use(bodyParser.urlencoded);
app.use(bodyParser.json);
app.use(cors({ origin: true, credentials: true }));

app.use(v1Routes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);

  mongoose.set("strictQuery", false);
  mongoose.connect(DB_URI);
});

export { LEVELS };
