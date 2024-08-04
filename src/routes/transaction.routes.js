import e from "express";
import TxController from "../controller/transaction.controller.js";

const router = e.Router();

router.route("/:number").post(TxController.transfer);

export default router;
