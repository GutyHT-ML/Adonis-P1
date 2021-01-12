'use strict'
const Post = use('App/Models/Post')
class PostController {
    makePost({request, response}){
        const body = request.post()
        const post = new Post()
        post.author = request.get(body.author)
        post.content = request.get(body.content)
        if(await post.save()){
            return response.created()
        }
        return response.badRequest()
    }
}

module.exports = PostController
