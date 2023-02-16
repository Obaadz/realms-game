import mongoose, { Schema } from "mongoose";

const characterSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "users", required: true },
  race: { type: Schema.Types.ObjectId, ref: "races", required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Character =
  mongoose.models.characters || mongoose.model("characters", characterSchema);

export default Character;
