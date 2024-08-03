import type { Request, Response } from "express";
import UserService from "../services/user.service";

const UserController = {
  handleGetAll: async (_: Request, res: Response) => {
    const allUsers = await UserService.getAll();
    return res.status(200).json({ data: allUsers });
  },
  handleCreate: async (req: Request, res: Response) => {
    console.log(req.body);
    const newUser = await UserService.create(req.body);
    return res.status(201).json({ data: newUser, msg: "user created" });
  },
  handleUpdate: async (req: Request, res: Response) => {
    const id = req.params.id;
    await UserService.update(id, req.body);
    return res.status(201).json({ msg: "thread updated" });
  },
  handleDelete: async (req: Request, res: Response) => {
    const id = req.params.id;
    await UserService.delete(id);
    return res.status(200).json({ msg: "user deleted" });
  },
};

export default UserController;
