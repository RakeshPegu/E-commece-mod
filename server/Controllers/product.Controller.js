import { Product } from "../lib/db.js"


export const createProduct = async(req, res)=>{
    const tokenUserId = req.userId
    const {name, quantity, price, description} = req.body
    try {
        if(!name || !quantity || !price || !description){
            return res.status(400).json({message:"All the fields are mandatory"})
        }
        const newProduct = await Product.create ({
            name,
            quantity,
            price,
            description,
            authorId : tokenUserId


            
        })
        
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({message:"Somethin went wrong"})
    }
}
export const getProducts = async(req, res)=>{
    
    try {
        const products = await Product.find({

        })
        res.status(200).json(products)
        
    } catch (error) {
        res.status(500).json({message:'Something went wrong'})
    }
}

export const getProduct = async(req, res)=>{
    const id = req.params.id

    try {
        const product = await Product.findById(id)
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({message:"Something went wrong"
        })
    }

}
export const deleteProduct = async(req, res)=>{
    const tokenUserId = req.userId
    const productId = req.params.id
    try {
        const product = await Product.findById (productId)
        if( String(tokenUserId) !== String(product.authorId)){
            return res.status(401).json({message:"You're not authorized"})
        }
        await Product.findByIdAndDelete(productId)
        
        res.status(200).json({message:'item has been deleted successfully'})
        
    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
    }
}
export const updateProduct = async(req,res)=>{
    const tokenUserId = req.userId
    const productId = req.params.id
    const {...productInfo} = req.body
    try {
        const product = await Product.findById( productId)
        if(tokenUserId !== product.authorId){
            return res.status(401).json({message:"you're not authorized"})
        }
        const newProductInfo = await Product.findByIdAndUpdate(productId, {
            $set :productInfo
        }, {new : true})
        res.status(200).json(newProductInfo)
    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
        
    }
}