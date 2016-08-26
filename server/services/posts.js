import mongoose, {Schema} from 'mongoose'
import createController from './helpers/createController'
import createRoutes from './helpers/createRoutes'




const postSchema = new Schema({

})

import {Router} from 'express'
const router = Router()
router.route('/')
  .get( (req, res)=>res.send([{post: true}]) )

export const postRouter = router

// export const Post = mongoose.model('Post', postSchema)
// const controller =createController(Post)
// export const postRouter = createRoutes(controller)
