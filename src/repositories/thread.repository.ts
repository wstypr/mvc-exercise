import ThreadModel from "../models/thread.schema";
import { ThreadType } from "../types/entity";

const ThreadRepository = {
  getAll: async () => {
    try {
      const allThreads = await ThreadModel.find().populate("author");
      return allThreads;
    } catch (error) {
      console.log("thread repository error", error);
    }
  },
  create: async ({ title, content, author }: ThreadType) => {
    try {
      const newThread = await new ThreadModel({
        title,
        content,
        author,
      }).save();
      return newThread;
    } catch (error) {
      console.log("thread repository error", error);
    }
  },
  update: async (id: string, { title, content, author }: ThreadType) => {
    try {
      await ThreadModel.findByIdAndUpdate(id, { title, content, author });
    } catch (error) {
      console.log("thread repository error", error);
    }
  },
  delete: async (id: string) => {
    try {
      await ThreadModel.findByIdAndDelete(id);
    } catch (error) {
      console.log("thread repository error", error);
    }
  },
};

export default ThreadRepository;
