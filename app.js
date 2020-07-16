//Koa2/app.js
const Koa = require("koa")
const router = require("./router/index")
const bodyParser = require("koa-body")
const cors = require('koa2-cors');
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
// app.use(jwt({ secret: SECRETKEY }).unless({ path: [/^\/login/] }));
app.use(router.routes())
	.use(async (ctx) => {
		console.log("404 Not Found")
	})

console.log("StartAt : http://127.0.0.1:3030")
app.listen(3030)