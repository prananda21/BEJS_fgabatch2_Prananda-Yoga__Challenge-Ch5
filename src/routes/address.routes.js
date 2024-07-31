import e from "express"
import AddressController from "../controller/address.controller.js"

const router = e.Router()

router.route("/register").post(AddressController.create)

export default router
