import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
