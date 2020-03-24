const db = require('../database');

class SessionController {
  async store(req, res) {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Id not provided' });
    }

    const ong = await db
      .table('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found whth ID' });
    }

    return res.json(ong);
  }
}

module.exports = new SessionController();
