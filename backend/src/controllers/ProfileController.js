const db = require('../database');

class ProfileController {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    if (!ong_id) {
      return res.status(401).json({ error: 'Ong id not provided' });
    }

    const incidents = await db.table('incidents').where('ong_id', ong_id);

    return res.json(incidents);
  }
}

module.exports = new ProfileController();
