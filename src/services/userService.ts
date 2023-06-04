import { Request, Response } from "express";
import prisma from "../database";

const userRegister = async (req: Request, res: Response) => {
    const {name, email, password} = req.body

    const verifyUserExist = await prisma.user.findFirst({
        where: {
            email: email
        }
    })

    if (verifyUserExist) {
        res.status(404).json({msg:"Usuário já existe!"})
    }

    
}