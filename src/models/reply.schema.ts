import { Schema, model } from "mongoose";

const ReplySchema = new Schema({
  respondent: { type: Schema.Types.ObjectId, ref: "User" },
  message: String,
  thread: { type: Schema.Types.ObjectId, ref: "Thread" },
});

const ReplyModel = model("Reply", ReplySchema);
export default ReplyModel;
