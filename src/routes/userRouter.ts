import { Router } from "express";
import userController from "../controllers/userController";
import rateLimit from 'express-rate-limit'

const router = Router();

const limiter = rateLimit({
  windowMs: 60 * 1000, // Define o intervalo de tempo para 1 minuto
  max: 2, // Define o número máximo de requisições permitidas no intervalo de tempo
  handler: (req, res) => {
    res.status(429).json({ error: "Limite de taxa excedido. Tente novamente mais tarde." });
  }
});

router.get("/", (req, res) => {
  res.send("Hello Word!");
});

router.post("/register", userController.registerUser);

router.post("/login", limiter, userController.loginUser)

export default router;
