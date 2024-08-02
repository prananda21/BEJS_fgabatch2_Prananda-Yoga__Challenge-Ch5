import e from "express";
import userRouter from "./user.routes.js";

export const router = e.Router();

router.use("/users", userRouter);
// router.use("/users/:id/addresses", addressRouter);
// router.use("/users/:id/accounts", accountRouter);
