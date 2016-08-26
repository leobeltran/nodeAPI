import mongoose, {Schema} from 'mongoose'
import createController from './helpers/createController'
import createRoutes from './helpers/createRoutes'

const commentSchema = new Schema({

});


import {Router} from 'express'
const router = Router()
router.route('/')
  .get( (req, res)=>res.send([{user: true}]) )

export const commentRouter = router
// export const Comment = mongoose.model('Comment', commentSchema)
// const controller =createController(Comment)
// export const commentRouter = createRoutes(controller)
