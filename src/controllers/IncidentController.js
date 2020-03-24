const db = require('../database');

class IncidentController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const [count] = await db
      .select()
      .table('incidents')
      .count();

    const incidents = await db
      .select()
      .table('incidents')
      .limit(5)
      .offset((page - 1) * 5);

    res.header('X-Total-Count', count['count(*)']);

    return res.json(incidents);
  }

  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await db.table('incidents').insert({
      title,
      description,
      value,
      ong_id
    });


    return res.json({ id });
  }

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await db
      .table('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (!incident) {
      return res.status(401).json({ error: 'Incident not found' });
    }

    if (incident === ong_id) {
      return res.status(401).json({ error: 'Operation not permited' });
    }

    await db
      .table('incidents')
      .where('id', id)
      .delete();

    return res.status(204).send();
  }
}

module.exports = new IncidentController();
