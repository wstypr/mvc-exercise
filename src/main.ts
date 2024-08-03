import express from "express";
import mongoose from "mongoose";
import { Request, Response } from "express";
import userRouter from "./routes/user.route";
import threadRouter from "./routes/thread.route";
import replyRouter from "./routes/reply.route";

const app = express();
const port = 8000;
const uri =
  "mongodb+srv://wstypr2:hkPp24lUOtFWz0VP@devscalecluster.rs3arjh.mongodb.net/?retryWrites=true&w=majority&appName=DevscaleCluster";

app.use(express.json());

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connection Success");
  } catch (error) {
    console.log("Connection Fail");
    console.log(error);
  }
}

app.get("/", (req: Request, res: Response) => {
  res.send("OK");
});

app.use("/user", userRouter);
app.use("/thread", threadRouter);
app.use("/reply", replyRouter);

connect();

app.listen(port, () => {
  console.log(`Listening to port:${port}`);
});
