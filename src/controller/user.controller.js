import { ValidationError } from "../error/ValidationError.js"
import { prisma } from "../provider/prisma.js"
import UserRepository from "../repository/user.repository.js"
import { HttpStatusCode, HttpStatusMessage } from "../utils/enum.js"
import { userSchema } from "../utils/validation.js"

class UserController {
    static create = async (req, res) => {
        const { email, password, pin } = req.body

        const { value, error } = userSchema.validate({
            email: email,
            password: password,
            pin: pin,
        })

        if (error)
            throw new ValidationError(HttpStatusCode.BAD_REQUEST, error.message)

        const [_, user] = await prisma.$transaction([
            UserRepository.create(email, password, pin),
            UserRepository.findByEmail(email),
        ])

        res.status(HttpStatusCode.CREATED).json({
            status: true,
            message: HttpStatusMessage.SUCCESS_REGISTER,
            data: user,
        })
    }
}

export default UserController
