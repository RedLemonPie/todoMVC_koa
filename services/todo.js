//Koa2/service/user.js
const allSqlAction = require("../lib/mysql")

async function addTodo(user, todo) {
	let {
		detail,
		sort = 0
	} = todo
	let {
		user_id
	} = user
	console.log(user, todo)
	let sql = `insert into todo (user_id,detail,valid,sort) values ('${user_id}','${detail}','1','${sort}')`
	return allSqlAction.allSqlAction(sql).then(res => {
		console.log(res, res.insertId)
		if (res && res.insertId) {
			return {
				msg: "添加成功",
				code: 200,
				id: res.insertId
			}
		} else {
			return {
				msg: "添加失败",
				code: 201
			}
		}
	})
}

async function getTodos(user) {
	let sql = `select * from todo t where t.user_id = '${user.user_id}' and t.valid = '1'`
	return allSqlAction.allSqlAction(sql).then(res => {
		console.log(res)
			return {
				data:res,
				msg: "success",
				code: 200
			}
	}).catch(e=>{

	})
}

async function updateTodo(user, todo) {
	let {
		id,
		detail,
		sort = 0
	} = todo
	let {
		user_id
	} = user
	let sql = `UPDATE todo SET detail = '${detail}', sort = '${sort}'
	WHERE id = '${id}' AND user_id = '${user_id}'`
	return allSqlAction.allSqlAction(sql).then(res => {
		console.log(res)
		if (res && res.affectedRows) {
			return {
				msg: "修改成功",
				code: 200,
			}
		} else {
			return {
				msg: "修改失败",
				code: 201
			}
		}
	})
}

async function deleteTodo(user, id) {
	let {
		user_id
	} = user
	let sql = `UPDATE todo SET valid = '0'	WHERE id = '${id}' AND user_id = '${user_id}'`
	return allSqlAction.allSqlAction(sql).then(res => {
		console.log(res)
		if (res && res.affectedRows) {
			return {
				msg: "删除成功",
				code: 200,
			}
		} else {
			return {
				msg: "修改失败",
				code: 201
			}
		}
	})
}
module.exports = {
	addTodo,getTodos,updateTodo,deleteTodo
}