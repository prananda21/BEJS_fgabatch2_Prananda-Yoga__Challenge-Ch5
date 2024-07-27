import bcrypt from "bcrypt"

const salt = bcrypt.genSaltSync(10)

const hashing = (password) => {
    return bcrypt.hashSync(password, salt)
}

export default hashing
