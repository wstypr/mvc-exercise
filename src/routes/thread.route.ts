import { Router } from "express";
import ThreadController from "../controllers/thread.controller";

const threadRouter = Router();

threadRouter.get("/", ThreadController.handleGetAll);
threadRouter.post("/", ThreadController.handleCreate);
threadRouter.patch("/:id", ThreadController.handleUpdate);
threadRouter.delete("/:id", ThreadController.handleDelete);

export default threadRouter;
