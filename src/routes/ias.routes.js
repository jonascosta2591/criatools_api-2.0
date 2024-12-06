import express from "express";
import iasController from "./../controllers/ias.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

//Rota para pegar os cookies do chatgpt
router.get("/get_chat_gpt_session/:uuid_grupo", authMiddleware, (req, res) => {
  return new iasController(req, res).getChatgptCookies();
});

//Rota para atualizar os cookies do chatgpt
router.get("/update_chat_gpt_session", (req, res) => {
  return new iasController(req, res).updateChatgptCookies();
});

export default router;
