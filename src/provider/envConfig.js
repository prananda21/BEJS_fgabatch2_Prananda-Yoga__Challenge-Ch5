import { configDotenv } from "dotenv"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class EnvConfig {
    static config() {
        configDotenv({ path: path.join(__dirname, "../../.env") })

        const APP_PORT = EnvConfig.#getEnv("APP_PORT")

        return {
            APP_PORT,
        }
    }

    static #getEnv(key) {
        const value = process.env[key]
        if (value === undefined)
            throw new Error(`Failed get environment ${key}`)
        return value
    }
}

export default EnvConfig
