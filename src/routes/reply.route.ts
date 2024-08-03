import { Router } from "express";
import ReplyController from "../controllers/reply.controller";

const replyRouter = Router();
replyRouter.get("/", ReplyController.handleGetAll);
replyRouter.post("/", ReplyController.handleCreate);
replyRouter.delete("/:id", ReplyController.handleDelete);

export default replyRouter;
