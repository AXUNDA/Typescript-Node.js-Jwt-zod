import express, { Express,Request,Response,Router } from "express"
import * as userController from "./controller/user.controller"
import validate from "./middleware/validateResource"
import { createUserSchema } from "./schema/user.schema"





const router:Router = express.Router()

router.get("/health", userController.healthCheck)

router.post("/create/user",validate(createUserSchema),userController.createUser)


// function routes (app:Express){
//       app.get("/healthcheck",(req:Request,res:Response):Response=>{
//             return res.status(200).json({health_status:"normal"})

//       })
//       app.post("/api/user",validate(createUserSchema),createUserHandler)

// }

export default router