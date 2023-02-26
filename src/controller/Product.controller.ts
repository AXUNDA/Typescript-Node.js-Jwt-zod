import { Request,Response } from "express";
import { CreateProductInput, UpdateProductInput } from "../schema/product.schema";
import { createProduct, findAndUpdateProduct, getProduct,deleteProduct } from "../services/product.service";
import { UpdateQuery } from "mongoose";
import { Product } from "../models/product.model";






export async function createProductHandler(req:Request< {},{}, CreateProductInput['body']>,res:Response) {
      const userId = res.locals.user._doc._id;
      

      const body = req.body;
    
      const product = await createProduct({ ...body, user: userId });
    
      return res.send(product);
      
}



export async function updateProductHandler(req:Request<UpdateProductInput["params"]>,res:Response){
      const userId = res.locals.user._doc._id;
      const productId = req.params._id;
      const update:UpdateQuery<Product> =req.body
      const product = await getProduct({_id:productId})
      if(!product){
            res.sendStatus(404)
      }
      if(String(product!.user ) !== userId){
            res.sendStatus(404)
            console.log(userId,String(product!.user))

      }
const updatedProduct  = await findAndUpdateProduct({_id:product!._id},update,{new:true})
return res.send(updatedProduct)

}


export async function deleteProductHandler(req:Request<UpdateProductInput["params"]>,res:Response){
      const userId = res.locals.user._doc._id;
      const productId = req.params._id;
      const product = await getProduct({productId})
      if(!product){
            res.sendStatus(404)
      }
      if(String(product!.user) ! == userId){
            res.sendStatus(404)

      }
await deleteProduct({_id:product!._id})
return res.sendStatus(200)



}


export async function getProductHandler(req:Request<UpdateProductInput["params"]>,res:Response){
      const productId = req.params._id;
      const product = await getProduct({_id: productId });

  if (!product) {
    return res.sendStatus(404);
  }

  return res.send(product);



}