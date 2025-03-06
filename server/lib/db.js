
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
      
    addressIDs: [{
        type:Types.ObjectId, ref:"Address"
    }],
    productIDs :[
        {
            type: Types.ObjectId, ref :"Product",
            
    
    
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
const addressSchema = new mongoose.Schema( {
    firstName:{
        type: String,
        required: true        
    },
    lastName : {
        type: String,
        required: true
    },
    shippingAddress: {
        type: String,
        required: true
    },
    city :{
        type: String,
        required: true
    },
    state :{
        type: String,
        required: true
    },
    phoneNumber : {
        type: String,
        required:true

    },
    zipCode :{
        type : String,
        required: true
    }, 
    landMark: {
        type : String,
        
    },
    authorId :{
        type : Types.ObjectId, ref: "User",
        required: true,
        unique:  false
        

    },
    createdAt: {
        type : Date,
        default: Date.now
    }
    

})
const User = mongoose.model('User', userSchema)
const Product = mongoose.model('Product', productSchema)
const Address = mongoose.model('Address', addressSchema)
export {User, Product, Address}