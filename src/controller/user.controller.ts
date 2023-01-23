import { Request,Response } from "express";
import logger from "../utils/logger"
// import { createUser } from "../services/user.service";
import hash from "../utils/hash";
import check from "../utils/checkPassword";
import UserModel,{IUser} from "../models/user.model";
import { omit } from "lodash";




export async function createUser(req:Request,res:Response):Promise<Response>{
      const {name,email,password} = req.body
      try {

            const newUser = new UserModel({
                  name,
                  email,
                  password: await hash(password)

            })

            await newUser.save()
           
            return res.status(200).json(omit(newUser.toJSON(),["password","createdAt"]))
            // return user
            
      } catch (error:any) {
            logger.error(error)
            return res.status(409).json(error)
            
      }

}


export async function  healthCheck(req:Request, res:Response):Promise<Response> {


      try {
            return res.status(200).json({
                  message:"health check normal"
            })
            
      } catch (error:any) {

            return res.status(400).json({error})
            
      }
}

