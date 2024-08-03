import { Request, Response } from "express";
import ReplyService from "../services/reply.service";

const ReplyController = {
  handleGetAll: async (req: Request, res: Response) => {
    const replies = await ReplyService.getAll();
    res.status(200).json({ data: replies });
  },
  handleCreate: async (req: Request, res: Response) => {
    try {
      await ReplyService.create(req.body);
      return res.status(201).send(req.body);
    } catch (error) {
      console.log("reply controller error", error);
    }
  },
  handleDelete: async (req: Request, res: Response) => {
    const id = req.params.id;
    await ReplyService.delete(id);
    return res.status(200).json({ msg: "reply deleted" });
  },
};

export default ReplyController;
