import express from 'express'
import { deleteUser, getUser, updateUser } from '../Controllers/user.Controller.js'
import verification from '../middleWare/verification.js'
const route = express.Router()
route.get('/:id',getUser)
route.delete("/:id",verification, deleteUser)
route.put("/:id",verification, updateUser)
export default route