import express from "express";
import cors from "cors";
import { config } from "dotenv";

config({ path: ".env.local" });

const PORT = process.env.PORT || 5000;

const app = express();
const bodyParser = {
  urlencoded: express.urlencoded({ limit: "5mb", extended: true }),
  json: express.json({ limit: "5mb" }),
};

app.use(bodyParser.urlencoded);
app.use(bodyParser.json);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
