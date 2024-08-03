import ReplyRepository from "../repositories/reply.repository";
import { ReplyType } from "../types/entity";

const ReplyService = {
  getAll: async () => {
    const replies = await ReplyRepository.getAll();
    return replies;
  },
  create: async (data: ReplyType) => {
    await ReplyRepository.create(data);
  },
  delete: async (id: string) => {
    await ReplyRepository.delete(id);
  },
};

export default ReplyService;
