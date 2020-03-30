const db = require('../database');
const generateUniqueId = require('../utils/generateUniqueId');

class OngController {
  async index(req, res) {
    const ongs = await db.select().table('ongs');
    return res.json(ongs);
  }

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = generateUniqueId();

    await db('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  }
}

module.exports = new OngController();
