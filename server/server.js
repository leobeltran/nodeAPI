import express from 'express'
import services from './services'
import config from './config/config'
import mongoose, {connection} from 'mongoose'
import middleware from './middleware'

// db.url is different depending on NODE_ENV
mongoose.connect(config.db.url)
var db = connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', ()=>console.log('connected to DB!'))

const app = express()


// setup the app middlware
middleware(app)

// setup the api
app.use('/api', services)


// export the app for testing
export default app
