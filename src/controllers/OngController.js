const crypto = require('crypto');
const db = require('../database');

class OngController {
  async index(req, res) {
    const ongs = await db.select().table('ongs');
    return res.json({ ongs });
  }

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString('hex');

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
