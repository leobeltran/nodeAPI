import request from 'request'
import jf from 'jsonfile'
import {User} from '../server/services/users'
import {Post} from '../server/services/posts'
import {Comment} from '../server/services/comments'

const writeFromServer = resource => {

  const url = `http://jsonplaceholder.typicode.com/${resource}`

  request(url, (error, response, body)=> {
      if (response.statusCode >= 200 && response.statusCode < 400) {
        jf.writeFileSync(`${__dirname}/${resource}.json`, JSON.parse(body), {spaces:2})
      }
  })

}



writeFromServer('comments')
writeFromServer('posts')
writeFromServer('users')
