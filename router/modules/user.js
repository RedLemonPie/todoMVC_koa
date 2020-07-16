
const Router =require("koa-router")
const router = new Router()

const user = require("../../controller/userController.js")

router.post("login","/login/login",user.checkLogin)
router.post("login","/login/register",user.registerUser)

module.exports = router