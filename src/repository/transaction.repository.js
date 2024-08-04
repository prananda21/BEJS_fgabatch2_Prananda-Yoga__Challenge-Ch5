import { prisma } from "../database/prisma.js";

class TxRepository {
  static create = (account_id, amount, description, type) => {
    const transaction = prisma.transaction.create({
      data: {
        account: {
          connect: {
            id: account_id,
          },
        },
        amount: amount,
        description: description,
        type: {
          connect: {
            id: type,
          },
        },
      },
    });

    return transaction;
  };
}

export default TxRepository;
