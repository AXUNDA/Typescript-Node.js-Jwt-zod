import mongoose from "mongoose";
import config from "config";
import logger from "./logger"
import data from "../data"

function connect (){
      const dbUri:string = data.dbUri
      return mongoose.connect(dbUri).then(()=>{
            logger.info("connected to db")
      }).catch((err)=>{
            logger.error(err)
            process.exit(1)
      });

}

export default connect