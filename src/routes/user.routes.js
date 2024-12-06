import express from "express";

import userController from "./../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/login", (req, res) => {
  return new userController(req, res).login();
});

router.get("/register", (req, res) => {
  return new userController(req, res).register();
});

router.get("/dashboard", authMiddleware, (req, res) => {
  return new userController(req, res).dashboard();
});

export default router;
