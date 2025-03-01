import { Role } from '@prisma/client'
import mongoose, { Model, Types } from 'mongoose'
const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true

    },
    role : {
        type : String,
        enum :['USER', 'ADMIN'],
        default:"USER"
       
    },

    email   : {
        type : String,
        required: true, 
        unique: true
    },
    password : {
        type: String,
        required : true


    },
    createdAt :{ 
        type : Date,
        default:  Date.now
    },
    products :[
        {
            type: Types.ObjectId, ref :"Product",
            required: true
    
    
        }
    ]

})
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required :true
    },
     authorId :{ 
        type : Types.ObjectId, ref : 'User',
        required :true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type : Date,
        default: Date.now
    }
})
const User = mongoose.model('User', userSchema)
const Product = mongoose.model('Product', productSchema)
export {User, Product}