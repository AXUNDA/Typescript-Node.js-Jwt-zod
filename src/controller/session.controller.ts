
import { Request,response,Response } from "express";
import { validatePassword } from "../services/user.service";
import { createSession } from "../services/session.service";
import { signJwt,verifyJwt } from "../utils/jwt.utils";
import { findSession,updateSession } from "../services/session.service";




export async function CreateSessionHandler(req:Request,res:Response){

      try {
      const user = await validatePassword(req.body)
      if(!user){
            res.status(404).json({
                  status:"error",
                  message:"invalid credentials"
            })
      }

     
      const session = await createSession(user!._id,req.get("user-agent") || "")

      const accessToken = signJwt(
            {
            ...user,
            session:session!._id},
            {expiresIn:"1y"}

      
      )   
      
      const refreshToken = signJwt(
            {
            ...user,
            session:session!._id},
            {expiresIn:"1y"}

      )   

      return res.send({accessToken,refreshToken})
      } catch (error:any) {
            throw new Error(error)      
      }
}

export async function getUserSessions(req:Request,res:Response) {
      try {
            const user = res.locals.user._doc._id
            const session = await findSession({user:user,valid:true})
            return res.send(res.locals.user)
            
      } catch (error:any) {
            throw new Error(error)      

            
            
      }
      
}


export async function deleteSession(req:Request,res:Response) {
      await updateSession({_id:res.locals.user.session},{valid:false})
      console.log(res.locals.user._doc._id)


      res.send({
            accessToken:null,
            refreshToken:null
      })
      
}