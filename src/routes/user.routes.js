import e from "express"
import UserController from "../controller/user.controller.js"

const router = e.Router()

router.route("/register").post(UserController.create)

// router.route("/register/credential").post(UserController.createUserCredential)

export default router
