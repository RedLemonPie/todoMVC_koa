
const Router =require("koa-router")
const user = require("./modules/user")
const todo = require("./modules/todo")

let router = new Router()

router.use(user.routes())
router.use(todo.routes())

module.exports = router