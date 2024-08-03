import { ReplyType } from "./../types/entity";
import ReplyModel from "../models/reply.schema";

const ReplyRepository = {
  getAll: async () => {
    const replies = await ReplyModel.find()
      .populate("respondent")
      .populate("thread");
    return replies;
  },
  create: async (data: ReplyType) => {
    try {
      const newReply = new ReplyModel(data);
      await newReply.save();
    } catch (error) {
      console.log("reply repository error", error);
    }
  },
  delete: async (id: string) => {
    await ReplyModel.findByIdAndDelete(id);
  },
};

export default ReplyRepository;
