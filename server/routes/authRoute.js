import express from 'express';
import { login, logout, register } from '../Controllers/auth.Controller.js';
const route = express.Router()
route.post('/register', register)
route.post('/login', login)
route.post('/logout', logout)
export default route;