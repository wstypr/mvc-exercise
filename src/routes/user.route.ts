import { Router } from "express";
import UserController from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", UserController.handleGetAll);
userRouter.post("/", UserController.handleCreate);
userRouter.patch("/:id", UserController.handleUpdate);
userRouter.delete("/:id", UserController.handleDelete);

export default userRouter;
