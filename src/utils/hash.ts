import bcrypt from "bcrypt";



const hash = async( input:string):Promise<string>=>{

      return  await bcrypt.hashSync(input,10)




}


export default hash