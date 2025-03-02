import { User } from '../lib/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const register = async(req, res)=>{
    const {email, username, password} = req.body
    try {
        if(!email || !username ||! password){
            return res.status(400).json({message:"All the fields are mandatory"})
        }
        const user = await User.findOne ({
            email : email
        })
        if(user){
            return res.status(400).json({message:"Email address already exist"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create ({
            email,
            username,
            password: hashedPassword
        })
        
        return res.status(200).json({message:"Registered successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
        
    }

}
export const login = async(req,res)=>{
    const {email, password }= req.body
    try {
        if(!email || !password){
            return res.status(400).json({message:"All the fields are mandatory"})
        }
        const user = await User.findOne({
            email:email
        })
        if(!user){
            return res.status(404).json({message:"User Not found"})
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if(!isValidPassword){
            return res.status(401).json({message:"Wrong password"})
        }
        const age = 1000*60*60*24*7;
        const token = jwt.sign({
            id:user.id
        }, process.env.JWT_SECRECT_KEY, {expiresIn: age})
        return res.cookie('token', token, {
            httpOnly:true,
            secure:true,
            sameSite:'strict',
            maxAge:age
        }).json(user)

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
    }
}
export const logout = async(req, res)=>{
    try {
        res.clearCookie('token' ,{
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        }).json({message:"Logged out successfully"})
        
    } catch (error) {
        res.status(500).json({message:"Something went wrong"})
    }
}