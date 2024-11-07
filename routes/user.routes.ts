import { Router } from "express";
import UserController from "../controllers/user.controller";

const userController = new UserController();
const userRouter = Router();

userRouter.post("/user", userController.createUser);
userRouter.get("/user", userController.getUsers);
userRouter.get("/user/:id", userController.getOneUser);
userRouter.put("/user", userController.updateUser);
userRouter.delete("/user/:id", userController.deleteUser);

export default userRouter;