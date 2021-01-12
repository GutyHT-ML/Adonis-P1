'use strict'
const User = use('App/Models/User')
const {validate} = use('Validator')
class UserController {
    async makeUser({request, response}){
        const req = request.all()
        const rules = {
            username: 'required|unique:users',
            email:'required|unique:users',
            password:'required'
        }
        const validacion = await validate(req, rules)
        if(validacion.fails()){
            return response.status(400).json({error:'Duplicated'})
        }
        const user = new User()
        user.username = req.username
        user.email = req.email
        user.password = req.password
        await user.save()
        return response.status(201).json(user)
    }
    async showUser({request, response, params}){
        const id = params.id
        const user = await User.findOrFail(id)
        return response.status(200).json({user:user, id:params.id})
    }
    async deleteUser({request, response, params}){
        const id = params.id
        const user = await User.findOrFail(id)
        await user.delete()
        return response.status(200).json({user:user, id:params.id})
    }
    async editUser({request, response, params}){
        const id = params.id
        const user = await User.findOrFail(id)
        user.merge({
            username:request.input('username', user.username), 
            email:request.input('email', user.email), 
            password:request.input('password', user.password)
        })
        await user.save()
        return response.status(200).json({user:user, id:params.id})
    }

}

module.exports = UserController
