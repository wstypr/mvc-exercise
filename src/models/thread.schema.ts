import { Schema, model } from "mongoose";

const ThreadSchema = new Schema({
  title: String,
  content: String,
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

const ThreadModel = model("Thread", ThreadSchema);
export default ThreadModel;
