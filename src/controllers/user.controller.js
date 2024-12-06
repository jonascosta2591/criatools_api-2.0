import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

class User {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }
  async login() {
    const { email, senha } = this.req.body;

    const users = await prisma.user.findMany({
      where: {
        AND: [{ email }, { senha }],
      },
    });

    if (users.length === 0)
      return this.res.status(404).send("email ou senha invalidos");

    const payload = { uuid: users.uuid, uuid_grupo: users.uuid_grupo };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });

    return this.res.status(200).send([...users, token]);
  }
  async register() {
    try {
      try {
        const newUser = await prisma.user.create({
          data: {
            nome: "Jane Doe",
            email: "janedoe1@example.com",
            senha: "Jane Doe",
            plano: "mensal",
            liberado: 1,
            uuid_grupo: "dscsdcsdcscddscsc",
            id_subscription: "dscsdcsdcscddscsc",
            customer_id: "dscsdcsdcscddscsc",
            asaas_data: "dscsdcsdcscddscsc",
          },
        });
        return this.res.status(200).send(newUser);
      } catch (err) {
        return this.res.status(200).send("email já cadastrado");
      }
    } catch (err) {
      return this.res.status(500).send(err.message);
    }
  }
  async dashboard() {
    try {
      return this.res.status(200).send("Rota privada");
    } catch (err) {
      return this.res.status(500).send(err.message);
    }
  }
}

export default User;