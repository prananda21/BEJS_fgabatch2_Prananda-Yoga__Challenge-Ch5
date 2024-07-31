import { NotFoundError } from "../error/NotFoundError.js";
import { ValidationError } from "../error/ValidationError.js";
import AddressRepository from "../repository/address.repository.js";
import { HttpStatusCode, HttpStatusMessage } from "../utils/enum.js";
import {
    addressSchema,
    idAddressSchema,
} from "../utils/validation/address.validation.js";

class AddressController {
    static create = async (req, res, next) => {
        try {
            const {
                street,
                district,
                regency,
                province,
                country,
                postal_code,
                address_type,
                user_id,
            } = req.body;

            const { value, error } = addressSchema.validate({
                street: street,
                district: district,
                regency: regency,
                province: province,
                country: country,
                postal_code: postal_code,
                address_type: address_type,
                user_id: user_id,
            });

            if (error) throw new ValidationError();
            
            const address = await AddressRepository.create(
                value.street,
                value.district,
                value.regency,
                value.province,
                value.province,
                value.postal_code,
                value.address_type,
                value.user_id
            );

            return res.status(HttpStatusCode.CREATED).json({
                status: true,
                message: HttpStatusMessage.SUCCESS_CREATE_ADDRESS,
                data: address,
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

    static get = async (req, res, next) => {
        try {
            const { id } = req.params;

            const { value, error } = idAddressSchema.validate({
                id: id,
            });

            if (error) throw new ValidationError();

            const address = await AddressRepository.get(value.id);
            if (!address) throw new NotFoundError();

            return res.status(HttpStatusCode.ACCEPTED).json({
                status: true,
                message: HttpStatusMessage.SUCCESS_FOUND_ADDRESS,
            });
        } catch (error) {
            if (
                error instanceof ValidationError ||
                error instanceof NotFoundError
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
}
export default AddressController;
