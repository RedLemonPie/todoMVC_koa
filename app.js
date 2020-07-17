//Koa2/app.js
const Koa = require("koa")
const router = require("./router/index")
const bodyParser = require("koa-body")
const cors = require('koa2-cors');
const {
	checkToken
} = require('./lib/jwt')
// const jwt = require('koa-jwt');
// const SECRETKEY = require("./config/pwd")
var app = new Koa()

app.use(cors({
	origin: function (ctx) {
		return '*';
		// return 'http://localhost:9999';
	},
	exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
	maxAge: 5,
	credentials: true,
	allowMethods: ['GET', 'POST', 'DELETE'],
	allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(bodyParser())
app.use(async (ctx, next) => {
	// console.log(checkToken(ctx.request.header.authorization))
	if(ctx.request.url.indexOf('/login/') == 0){
		await next()
	}else{
		let res = await checkToken(ctx.request.header.authorization)
		ctx.userInfo = res
		if (res) {
			await next();
		}
	}

});
app.use(router.routes())
	.use(async (ctx) => {
		console.log("404 Not Found")
	})

console.log("StartAt : http://127.0.0.1:3030")
app.listen(3030)