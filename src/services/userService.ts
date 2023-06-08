import { Request, Response } from "express";
import prisma from "../database";
import userData from "../schema/userSchema";

const userRegister = async (req: Request, res: Response) => {
    const {name, email, password} = req.body

    if (typeof name !== 'string') {
        return res.status(406).json({msg: "Nome inválido."})
    }

    if (typeof email !== 'string') {
        return res.status(406).json({msg: "Email inválido."})
    }

    if (typeof password !== 'string') {
        return res.status(406).json({msg: "Senha inválida."})
    }

    const verifyUserEmailExist = await prisma.user.findFirst({
        where: {
            email: email
        }
    })

    if (verifyUserEmailExist) {
        return res.status(404).json({msg:"Usuário já existe!"})
    }

    try {
        const registerNewUser: userData = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })
    
        if (registerNewUser) {
            return res.status(201).json({msg: "Usuário criado com sucesso."})
        }
    } catch (err) {
        return res.status(500).json({msg: "Erro no servidor.", err}) 
    }

}

export default userRegister