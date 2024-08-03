import type { Request, Response } from "express";
import ThreadService from "../services/thread.service";

const ThreadController = {
  handleGetAll: async (_: Request, res: Response) => {
    const allThreads = await ThreadService.getAll();
    return res.status(200).json({ data: allThreads });
  },
  handleCreate: async (req: Request, res: Response) => {
    console.log(req.body);
    const newThread = await ThreadService.create(req.body);
    return res.status(201).json({ data: newThread, msg: "thread created" });
  },
  handleUpdate: async (req: Request, res: Response) => {
    const id = req.params.id;
    await ThreadService.update(id, req.body);
    return res.status(201).json({ msg: "thread updated" });
  },
  handleDelete: async (req: Request, res: Response) => {
    const id = req.params.id;
    await ThreadService.delete(id);
    return res.status(200).json({ msg: "thread deleted" });
  },
};

export default ThreadController;
