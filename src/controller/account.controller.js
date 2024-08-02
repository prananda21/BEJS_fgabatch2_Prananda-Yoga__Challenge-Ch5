import { ValidationError } from "../error/ValidationError.js";
import AccountRepository from "../repository/account.repository.js";
import { HttpStatusCode, HttpStatusMessage } from "../utils/enum.js";
import {
    accountSchema,
    findAccountSchema,
} from "../utils/validation/account.validation.js";

class AccountController {
    static create = async (req, res, next) => {
        try {
            const { user_id } = req.params;
            const { interest_rate, type } = req.body;

            const { value, error } = accountSchema.validate({
                user_id: user_id,
                interest_rate: interest_rate,
                type: type,
            });

            if (error) throw new ValidationError();

            const account = await AccountRepository.create(
                value.user_id,
                value.interest_rate,
                value.type
            );

            return res.status(HttpStatusCode.CREATED).json({
                status: true,
                message: HttpStatusMessage.SUCCESS_CREATE_ACCOUNT,
                data: account,
            });
        } catch (error) {
            if (error instanceof ValidationError) {
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

    static find = async (req, res, next) => {
        try {
            const { user_id, account_id } = req.params;

            const { value, error } = findAccountSchema.validate({
                user_id: user_id,
                account_id: account_id,
            });

            if (error) throw new ValidationError();

            let account = await AccountRepository.find(
                value.user_id,
                value.account_id
            );

            if (account === null) {
                account = []
            }

            return res.status(HttpStatusCode.ACCEPTED).json({
                status: true,
                message: HttpStatusMessage.SUCCESS_FOUND_ACCOUNT,
                data: account,
            });
        } catch (error) {
            if (error instanceof ValidationError) {
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
}

export default AccountController;
