var id = 0
class todoList {
    constructor(name) {
        this.listName = name
        this.todos = []
    }

    addTodo(title) {
        this.todos.push({ title, done: false, id: id++ })
    }
    deleteTodo(id) {
        Object.assign(this.todos, this.todos.filter(todo => todo.id !== id))
    }
    toggleTodo(id) {
        this.todos.map(todo => { if (todo.id === id) todo.done = !todo.done })
    }
    viewList() {
        console.log("Id\tDone\tTask")
        this.todos.forEach(todo => console.log(`${todo.id}\t${todo.done}\t${todo.title}`))
    }
}

const list = new todoList("Example")
list.addTodo("Implement Command Pattern")
list.addTodo("Implement Module Pattern")
list.addTodo("Implement Adapter Pattern")
list.addTodo("Implement Facade Pattern")

list.viewList()
list.toggleTodo(1)
list.viewList()