import app from '../server/server'
import request  from 'supertest'
import mongoose  from 'mongoose'
import {expect} from 'chai'


describe('COMMENTS', () => {



  before(()=>{
    mongoose.connection.close()
    mongoose.Promise=global.Promise
  })

  it('should get all posts', done=>{

    request(app)
    .get('/api/comments')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, resp)=>{
      expect(resp.body).to.be.an('array')
    })
    done()

  })


})
