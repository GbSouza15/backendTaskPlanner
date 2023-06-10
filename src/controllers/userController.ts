import prisma from "../database";
import userService from "../services/userService";
import { Request, Response } from "express";

const registerUser = async (req: Request, res: Response) => {

    try {

        const {name, email, password} = req.body

        const newUser = await userService.userRegister({ name, email, password })

        res.status(201).json({ message: "Usuário criado com sucesso." })
    } catch (error) {
        res.status(500).json({msg: "Erro ao criar usuário."})
    }

}

const loginUser = async () => {
    console.log("oi");
}

export default {
    registerUser,
    loginUser
}
