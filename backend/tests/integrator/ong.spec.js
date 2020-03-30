const request = require('supertest');
const app = require('../../src/app');
const db = require('../../src/database');

describe('ONG', () => {
  beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
  });

  afterAll(async () => {
    await db.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'Sociedade Vencer',
        whatsapp: '3799999999',
        email: 'greenpeac@gmail.com',
        city: 'Arcos',
        uf: 'MG'
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
