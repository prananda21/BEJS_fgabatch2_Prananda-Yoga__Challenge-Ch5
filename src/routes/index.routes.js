import e from "express"
import userRouter from "./user.routes.js"

export const router = e.Router()

router.use("/users", userRouter)
