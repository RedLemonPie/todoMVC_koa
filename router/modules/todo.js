
const Router =require("koa-router")
const router = new Router()

const todo = require("../../controller/todoController.js")

router.post("addTodo","/api/todo/add",todo.addTodo)
router.post("deleteTodo","/api/todo/delete",todo.deleteTodo)
router.post("updateTodo","/api/todo/update",todo.updateTodo)
router.get("getTodos","/api/todo/getLists",todo.getTodos)

module.exports = router