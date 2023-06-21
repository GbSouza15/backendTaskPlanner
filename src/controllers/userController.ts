import userService from "../services/userService";
import { Request, Response } from "express";

const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    await userService.userRegister({ name, email, password });

    res.status(201).json({ message: "Usuário criado com sucesso." });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ msg: error.message });
    }
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    await userService.userLogin({ email, password });

    res.status(200).json({ msg: "Login realizado com sucesso." });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ msg: error.message });
    }
  }
};

export default {
  registerUser,
  loginUser,
};
