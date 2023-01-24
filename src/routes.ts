import express, { Express,Request,Response,Router } from "express"
import * as userController from "./controller/user.controller"
import validate from "./middleware/validateResource"
import { createUserSchema } from "./schema/user.schema"
import * as sessionController from "./controller/session.controller"
import { createSessionSchema } from "./schema/session.schema"
import { requireUser } from "./middleware/requireUser"





const router:Router = express.Router()

router.get("/health", userController.healthCheck)

router.post("/create/user",validate(createUserSchema),userController.createUser)


router.post("/api/session",validate(createSessionSchema),sessionController.CreateSessionHandler)

router.get("/api/session",requireUser,   sessionController.getUserSessions)


router.delete("/api/session",requireUser,   sessionController.deleteSession)








// function routes (app:Express){
//       app.get("/healthcheck",(req:Request,res:Response):Response=>{
//             return res.status(200).json({health_status:"normal"})

//       })
//       app.post("/api/user",validate(createUserSchema),createUserHandler)

// }

export default router