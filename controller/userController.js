
const user = require("../services/user")

async function checkLogin(ctx,next){
 let {username,password} = ctx.request.body
 let data = await user.checkUser(username,password)
 return ctx.response.body = data
}

async function registerUser(ctx,next){
 let {username,password} = ctx.request.body
 let data = await user.findUser(username,password)
 return ctx.response.body = data
}

module.exports={
 checkLogin,
 registerUser
}