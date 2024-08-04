import { prisma } from "../database/prisma.js";
import { APIError } from "../error/APIError.js";
import { NotFoundError } from "../error/NotFoundError.js";
import { ValidationError } from "../error/ValidationError.js";
import AccountRepository from "../repository/account.repository.js";
import TxRepository from "../repository/transaction.repository.js";
import { HttpStatusCode, HttpStatusMessage } from "../utils/enum.js";
import { withdrawValidation } from "../utils/validation/transaction.validation.js";

class TxController {
  static transfer = async (req, res, next) => {
    try {
      const { number } = req.params;
      const { amount, type, description, destination } = req.body;

      const { value, error } = withdrawValidation.validate({
        number: number,
        amount: amount,
        type: type,
        description: description,
        destination: destination,
      });
      if (error) throw new ValidationError();

      const from = await AccountRepository.findByNumber(value.number);
      const to = await AccountRepository.findByNumber(value.destination);

      if (!from || !to) throw new NotFoundError();
      if (from.balance <= 0) {
        throw new APIError("balance tidak cukup untuk melakukan transaksi");
      }

      const tx_balance = from.balance - amount;
      const tx_send = to.balance + amount;

      const tx = await TxRepository.create(
        from.id,
        value.amount,
        value.description,
        value.type
      );

      await AccountRepository.updateBalance(from.id, from.number, tx_balance);
      const updateTo = await AccountRepository.updateBalance(
        to.id,
        to.destination,
        tx_send
      );

      return res.status(HttpStatusCode.CREATED).json({
        status: true,
        message: HttpStatusMessage.SUCCESS_TX_TRANFER,
        data: {
          source: tx,
          destination: updateTo,
        },
      });
    } catch (error) {
      if (
        error instanceof NotFoundError ||
        error instanceof ValidationError ||
        error instanceof APIError
      ) {
        return res.status(error.code).json({
          status: false,
          message: error.message,
          data: null,
        });
      } else {
        next(error);
      }
    }
  };

  static deposit = (req, res, next) => {};
}

export default TxController;
