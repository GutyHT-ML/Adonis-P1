'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/user/create', 'UserController.makeUser')
Route.get('/user/:id', 'UserController.showUser')
Route.delete('/user/:id', 'UserController.deleteUser')
Route.put('/user/:id', 'UserController.editUser')
// Route.post('/post/create', 'PostController.makePost')
// Route.get('/post/:id', 'PostController.showPost')
// Route.get('/post', 'PostController.posts')
// Route.put('/post/:id', 'PostController.editPost')
// Route.delete('/post/:id', 'PostController.deletePost')
// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON' }
// })
