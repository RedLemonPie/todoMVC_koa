const todo = require("../services/todo")

async function addTodo(ctx, next) {
	let user = ctx.userInfo
	let data = ctx.request.body.todo
	let res = await todo.addTodo(user, data)
	return ctx.response.body = res
}
async function updateTodo(ctx, next) {
	let user = ctx.userInfo
	let data = ctx.request.body.todo
	let res = await todo.updateTodo(user, data)
	return ctx.response.body = res
}
async function deleteTodo(ctx, next) {
	let user = ctx.userInfo
	let id = ctx.request.body.id
	let res = await todo.deleteTodo(user, id)
	return ctx.response.body = res
}

async function getTodos(ctx, next) {
	let user = ctx.userInfo
	let data = await todo.getTodos(user)
	return ctx.response.body = data
}

module.exports = {
	addTodo,
	getTodos,
	updateTodo,
	deleteTodo
}