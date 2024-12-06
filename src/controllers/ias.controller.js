import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class iasController {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }
  async getChatgptCookies() {
    const chatgptCookies = await prisma.grupos.findMany({
      where: {
        uuid_grupo: this.req.params.uuid_grupo,
      },
    });
    return this.res.status(200).send(chatgptCookies);
  }

  async updateChatgptCookies() {
    return this.res.status(200).send({ cookies: [] });
  }
}
export default iasController;
