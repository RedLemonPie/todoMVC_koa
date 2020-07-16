
const Router =require("koa-router")
const user = require("./modules/user")

let router = new Router()

router.use(user.routes())

module.exports = router