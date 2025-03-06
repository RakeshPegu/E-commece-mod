import { Address, User } from "../lib/db.js";

export const createAddress = async(req, res)=>{
   const tokenUserId = req.userId
   const {lastName, firstName, shippingAddress, city, state, zipCode,phoneNumber, landMark} = req.body;
    try {
        if(!tokenUserId){
            return res.status(401).json({message:'Unauthorized : User not found'})
        }
        if([firstName, lastName, shippingAddress, city, state, zipCode, phoneNumber].some(field =>!field) ){
            return res.status(400).json({message:"All the fields are mandatory"})
        }
       
        
        const address = await Address.create({
            firstName,
            lastName,
            shippingAddress,
            city,
            state,
            zipCode,
            phoneNumber,
            landMark,
            authorId:tokenUserId
        })
        console.log(tokenUserId)
        console.log(address)
        const updatedUser = await User.findByIdAndUpdate(tokenUserId, {
            $set: {
                addressIDs: [
                    address._id
                ]
            }
            
        })
        console.log(updatedUser)
        res.status(200).json(address)

        
    } catch (error) {
        res.status(500).json({message:'Something went wrong this is some created'})
        
    }
}
export const getAddresses = async(req, res)=>{
    const tokenUserId = req.userId;
    try {
        const user = await User.findById(tokenUserId)
        console.log(user.addressId)

        const addresses = await Address.find()
        res.status(200).json(addresses)
        
    } catch (error) {
        res.status(500).json({message:'Something went wrong'})
        
    }
}
export const getAddress = async(req, res)=>{
    const tokenUserId = req.userId
    const addressId = req.params.id
    try {
        const user = await User.findById(tokenUserId)
        if(user.role !== 'ADMIN' || tokenUserId !== user.addressId.include(authorId)){
            return res.status(403).json({message:"You're not allowed"})
        }
        const address = await Address.findById(addressId)
        res.status(200).json(address)

        
    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
        
    }
}