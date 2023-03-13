import mongoose, { Schema } from "mongoose";
import { IUserDocument } from "../types/user";

export const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  characters: { type: [Schema.Types.ObjectId], ref: "characters" },
  current_character: { type: Schema.Types.ObjectId, ref: "characters" },
  crystal: { type: Number, default: 0, required: true },
});

const User = mongoose.models.users || mongoose.model<IUserDocument>("users", userSchema);

export default User;
