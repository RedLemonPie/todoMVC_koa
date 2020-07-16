//Koa2/service/user.js
const allSqlAction = require("../lib/mysql")
const crypto = require('crypto')
const PASSWORDKEY = 'todolist'
const {createToken} = require('../lib/jwt')

async function checkUser(username, password) {
	let pwd =   crypto.createHash('md5').update(password).digest('hex')
	let sql = `select * from user t where t.username = '${username}' and t.password='${pwd}'`
	return allSqlAction.allSqlAction(sql).then(res => {
		console.log(res)
		 if (res.length == 1 && res[0].username === username) {
				let token = createToken({
					username:username,
				})
		 return { msg: "登陆成功", code: 200 ,id:res[0].id,token }
		 } else {
		 return { msg: "登录失败", code: 201 }
		 }
	})
}

async function findUser(username, password) {
	let sql = `select * from user t where t.username = '${username}'`
	return allSqlAction.allSqlAction(sql).then(res => {
		console.log(res)
		if (res.length == 0) {
			return registerUser(username, password)
		} else {
			return {
				msg: "用户已存在",
				code: 202
			}
		}
	})
}

async function registerUser(username, password) {
	let pwd =   crypto.createHash('md5').update(password).digest('hex')
	let sql = `insert into user (username,password) values ('${username}','${pwd}')`
	return allSqlAction.allSqlAction(sql).then(res => {
		if (res.affectedRows == 1) {
			return {
				msg: "注册成功",
				code: 200
			}
		} else {
			return {
				msg: "注册失败",
				code: 200
			}
		}
	})
}

async function registerUser(username, password) {
	let pwd =   crypto.createHash('md5').update(password).digest('hex')
	let sql = `insert into user (username,password) values ('${username}','${pwd}')`
	return allSqlAction.allSqlAction(sql).then(res => {
		if (res.affectedRows == 1) {
			return {
				msg: "注册成功",
				code: 200
			}
		} else {
			return {
				msg: "注册失败",
				code: 200
			}
		}
	})
}
module.exports = {
	checkUser,
	findUser,
	registerUser
}