var id = 0


// INVOKER or RECIEVER
class todoList {
    constructor(name) {
        this.name = name
        this.todos = []
        this.history = []
    }

    executeCommand(command) {
        this.todos = command.execute(this.todos)
        this.history.push(command)
        console.log("[+] EXEC: " + command.name)
    }

    undo() {
        if (this.history.length > 0) {
            const command = this.history.pop()
            this.todos = command.undo(this.todos)
            console.log("[+] UNDO: " + command.name)
        }
    }

    show() {
        console.log("-------------")
        console.log(this.name)
        console.log("-------------")
        console.log("Id\tDone\tTask")
        this.todos.forEach(todo => console.log(`${todo.id}\t${todo.done}\t${todo.title}`))
        console.log("-------------")
    }
}

// COMMANDS
class AddTodo {
    constructor(title) {
        this.name = "ADD"
        this.title = title
    }

    execute(todos) {
        this.id = id++
            todos.push({ title: this.title, done: false, id: this.id })
        return todos
    }

    undo(todos) {
        todos = todos.filter(todo => todo.id !== this.id)
        return todos
    }
}

class ToggleTodo {
    constructor(id) {
        this.name = "TOGGLE"
        this.id = id
    }
    execute(todos) {
        todos.map(todo => { if (todo.id === this.id) todo.done = !todo.done })
        return todos
    }
    undo(todos) {
        todos.map(todo => { if (todo.id === this.id) todo.done = !todo.done })
        return todos
    }
}

class DeleteTodo {
    constructor(id) {
        this.name = "DELETE"
        this.id = id
    }
    execute(todos) {
        this.prevState = todos
        let output = todos.filter(todo => todo.id !== this.id)
        return output
    }

    undo() {
        return this.prevState
    }
}

// INVOKER INSTANCE
var list = new todoList("Todo List Demo")

// CREATORS or SENDERS
list.executeCommand(new AddTodo("Hello There"))
list.executeCommand(new AddTodo("Implement Module Pattern"))
list.executeCommand(new AddTodo("Implement Adapter Pattern"))
list.executeCommand(new ToggleTodo(1))
list.executeCommand(new AddTodo("Implement Facade Pattern"))
list.show()
list.undo()
list.undo()
list.show()
list.executeCommand(new DeleteTodo(0))
list.show()
list.undo()
list.show()