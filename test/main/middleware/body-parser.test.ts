import request from 'supertest'
import app from '@/main/config/app'

describe('Body parser middleware', () => {
  test('should parse body as json', async () => {
    app.post('/test_body_parser', (req:any, res:any) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_body_parser')
      .send({ name: 'Otavio' })
      .expect({ name: 'Otavio' })
  })
})
