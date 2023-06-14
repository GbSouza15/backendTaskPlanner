import prisma from "../database";
import { userDataRegister, userDataLogin } from "../schema/userSchema";

const userRegister = async ({name, email, password}: userDataRegister) => {
    
    if (typeof name !== 'string') {
        throw new Error("Nome inválido.")
    }

    if (typeof email !== 'string') {
        throw new Error("Email inválido")
    }

    if (typeof password !== 'string') {
        throw new Error("Senha inválida.")
    }

    const verifyUserEmailExist = await prisma.user.findFirst({
        where: {
            email: email
        }
    })

    if (verifyUserEmailExist) {
        throw new Error("Email já em uso.")
    }
    
    const user = await prisma.user.create({
        data: {
            name, 
            email,
            password
        }
    })

    if (!user) {
        throw new Error("Erro ao criar usuário. Verifique os campos e tente novamente.")
    }
}

const userLogin = async ({ email, password }: userDataLogin) => {
    console.log("Criado");
    
}

export default {
    userRegister,
    userLogin
}