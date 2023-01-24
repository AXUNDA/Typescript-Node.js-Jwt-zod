import express,{Application} from "express";
const app:Application = express();

import connect from "./utils/connect"
import logger from "./utils/logger"
import routes from "./routes"
import data from "./data";
import deserializeUser from "./middleware/deserilizeUser";

const {port} = data





app.use(express.json())
app.use(deserializeUser)
app.use("/",routes)


app.listen(port,async ()=>{
      logger.info("server active")
      await connect()
      // routes(app)
})