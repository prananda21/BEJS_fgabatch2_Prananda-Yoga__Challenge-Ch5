import { app } from "../app.js"
import EnvConfig from "../provider/envConfig.js"

const port = EnvConfig.config().APP_PORT

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})
