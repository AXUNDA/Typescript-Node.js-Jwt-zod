
import { Request,Response } from "express";
import { validatePassword } from "../services/user.service";
import { createSession } from "../services/session.service";
import { IUser } from "../models/user.model";


export async function CreateSessionHandler(req:Request,res:Response){

      try {
      const user = await validatePassword(req.body)
      if(!user){
            res.status(404).json({
                  status:"error",
                  message:"invalid credentials"
            })
      }

     
      const session = createSession(user!._id,req.get("user-agent") || "")


            
      } catch (error:any) {
            throw new Error(error)
            
      }
      


}