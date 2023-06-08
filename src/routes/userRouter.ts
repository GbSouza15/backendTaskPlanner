import { Router } from "express";
import userRegister from "../services/userService";

const router = Router()

router.get('/', (req, res) => { 
    res.send("Hello Word!")
})

router.post('/register', userRegister)

export default router