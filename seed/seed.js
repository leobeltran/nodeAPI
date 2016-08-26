import mongoose,{connection, Schema} from 'mongoose'
import {User} from '../server/services/users'
import {Post} from '../server/services/posts'
import {Comment} from '../server/services/comments'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/nodeblog')
connection.on('error', console.error.bind(console, 'connection error: '))



const cleanDB = ()=> {
  console.log('... cleaning the DB')
  const cleanPromises = [User, Comment, Post]
    .map(model=> model.remove({}).exec())
  return Promise.all(cleanPromises)
}

const postPush=(_posts, _comments)=>{
  for (let i = 0; i < _posts.length; i++) {
    _posts[i].comments=[]
    for (let j = 0; j < _comments.length; j++) {
      if(_posts[i].id===_comments[j].postId){
              _posts[i].comments.push(_comments[j].postId)
            }
    }
    console.log(`... loading Post`)
    Object.assign(_posts[i], {_id:_posts[i].id})
    new Post(_posts[i])
      .save()
      .catch(e=>console.log(e.message))
  }
}

const seed= (data, Model) => data.map(doc=>{
    console.log(`... loading ${Model.modelName}`)
    if(Model.modelName==='User'){
      Object.assign(doc, {password:'test'})
    }
    Object.assign(doc, {_id:doc.id})
    new Model(doc).save()
      .catch(e=>console.log(e.message))
})


cleanDB().
  then(res=>{
    console.log('done cleaning db')
    console.log('Starting seed...')
  })



const comments = require('./comments.json')
const posts = require('./posts.json')
const users = require('./users.json')

postPush(posts,comments )
seed(comments, Comment)
seed(users, User)






setTimeout(()=>{
  console.log(`Seeded: posts=${posts.length}  |  comments=${comments.length}  |  users=${users.length}`)
  console.log('we out')
  process.exit(0)
},8000)
