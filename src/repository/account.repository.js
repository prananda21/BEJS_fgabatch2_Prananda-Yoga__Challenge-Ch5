import { prisma } from "../database/prisma.js";
import generateNumericId from "../provider/crypto.js";

class AccountRepository {
    static create = (user_id, interest_rate, type) => {
        const account = prisma.account.create({
            data: {
                user: {
                    connect: {
                        id: user_id,
                    },
                },
                number: generateNumericId(10),
                balance: 0,
                interest_rate: interest_rate,
                type: {
                    connect: {
                        id: type,
                    },
                },
            },
            select: {
                id: true,
                user: { select: { id: true, email: true, is_verified: true ``} },
                number: true,
                balance: true,
                interest_rate: true,
                type: true,
            },
        });

        return account;
    };

    static find = (user_id, account_id) => {
        const account = prisma.account.findUnique({
            where: {
                id: account_id,
                user_id: user_id
            },
            select: {
                id: true,
                user: {
                    select: {
                        id: true,
                        email: true,
                        is_verified: true
                    }
                },
                number: true,
                balance: true,
                interest_rate: true,
                type: {
                    select: {
                        id: true,
                        description: true
                    }
                }
            }
        })

        return account
    }
}

export default AccountRepository;
