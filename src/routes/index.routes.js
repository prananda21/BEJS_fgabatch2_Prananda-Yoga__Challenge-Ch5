import e from "express"
import userRouter from "./user.routes.js"
import addressRouter from "./address.routes.js"

export const router = e.Router()

router.use("/users", userRouter)
router.use("/addresses", addressRouter)