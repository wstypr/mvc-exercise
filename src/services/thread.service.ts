import ThreadRepository from "../repositories/thread.repository";
import { ThreadType } from "../types/entity";

const ThreadService = {
  getAll: async () => {
    try {
      const allThreads = await ThreadRepository.getAll();
      return allThreads;
    } catch (error) {
      console.log("thread service error", error);
    }
  },
  create: async (data: ThreadType) => {
    try {
      await ThreadRepository.create(data);
    } catch (error) {
      console.log("thread service error", error);
    }
  },
  delete: async (id: string) => {
    try {
      await ThreadRepository.delete(id);
    } catch (error) {
      console.log("thread service error", error);
    }
  },
  update: async (id: string, data: ThreadType) => {
    try {
      await ThreadRepository.update(id, data);
    } catch (error) {
      console.log("thread service error", error);
    }
  },
};

export default ThreadService;
