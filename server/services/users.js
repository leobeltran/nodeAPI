import mongoose, {Schema} from 'mongoose'
import createController from './helpers/createController'
import createRoutes from './helpers/createRoutes'

const userSchema = new Schema({

})

import {Router} from 'express'
const router = Router()
router.route('/')
  .get( (req, res)=>res.send([{user: true}]) )

export const userRouter = router


// export const User = mongoose.model('User', userSchema)
// const controller =createController(User)
// export const userRouter = createRoutes(controller)
