import { Router } from "express";
import * as Controller from "./controller";
 
const MessageRouter = Router();
 
MessageRouter.get("/:id/:sender_id", Controller.findAll);
MessageRouter.post("/", Controller.store);
 
export default MessageRouter;
