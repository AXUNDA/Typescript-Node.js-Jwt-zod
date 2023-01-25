import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProductModel,{Product} from "../models/product.model";








export async function createProduct(input :DocumentDefinition<Product>):Promise<Product> {

      return await ProductModel.create(input)
      
}




export async function getProduct(query:FilterQuery<Product>,options:QueryOptions={lean:true})  {
      return  await ProductModel.findOne(query,{},options)
      
}



export async function deleteProduct(query:FilterQuery<Product>) {
      return await ProductModel.deleteOne(query)
      
}




export async function findAndUpdateProduct(query:FilterQuery<Product>,update:UpdateQuery<Product>,options:QueryOptions={lean:true}) {
     return await ProductModel.findOneAndUpdate(query,update,options)
}