import hashing from "../provider/bcrypt.js"
import { prisma } from "../provider/prisma.js"

class UserRepository {
    static create = (email, password, pin) => {
        const user = prisma.user.create({
            data: {
                email: email,
                password: hashing(password),
                pin: hashing(pin),
            },
        })

        return user
    }

    static findByEmail = (email) => {
        const user = prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
                email: true,
                is_verified: true,
            },
        })

        return user
    }
}

export default UserRepository
