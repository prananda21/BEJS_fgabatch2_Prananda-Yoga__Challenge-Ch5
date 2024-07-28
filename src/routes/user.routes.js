import e from "express"
import UserController from "../controller/user.controller.js"
import CredentialController from "../controller/credential.controller.js"

const router = e.Router()

// endpoint /api/v1/users/register
router.route("/register").post(UserController.register)
router.route("/register/credential").post(CredentialController.create)

// endpoint /api/v1/users/:id
router.route("/:id").get(UserController.get)

export default router
