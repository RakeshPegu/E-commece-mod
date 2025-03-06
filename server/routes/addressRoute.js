import express from 'express'
import { createAddress, getAddress, getAddresses } from '../Controllers/userAddress.Controller.js'
import verification from '../middleWare/verification.js'
const route = express.Router()
route.post('/',verification, createAddress)
route.get('/',verification, getAddresses)
route.get('/:id',verification, getAddress)
export default route;