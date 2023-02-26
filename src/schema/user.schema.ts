import { object,string } from "zod";


export const createUserSchema = object({

body:object({
      name:string({
            required_error:"name is required"
      }),
      password:string({
            required_error:"password is required"
      }).min(6, " password is too short must be 6 characters minimum"),

      passwordConfirmation:string({
            required_error:"password confirmation is required"
      })
      ,
      email:string({
            required_error:"email is required"
      }).email("valid email is required")



}).refine((data)=> data.password === data.passwordConfirmation,{
      message:"passwords do not match",
      path:["passwordConfirmation"]
})


      
})