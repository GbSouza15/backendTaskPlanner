import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello Word!");
});

router.post("/register", userController.registerUser);

export default router;
