import Joi from "joi";

export const withdrawValidation = Joi.object({
    number: Joi.string().required(),
    amount: Joi.number().required(),
    type: Joi.string().required(),
    description: Joi.string(),
    destination: Joi.string().required(),
});
