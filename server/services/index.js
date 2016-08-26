import {Router} from 'express'
import {userRouter} from './users'
import {postRouter} from './posts'
import {commentRouter} from './comments'

const router = Router()

router.use('/users', userRouter)
router.use('/comments', commentRouter)
router.use('/posts', postRouter)



module.exports = router
