let input = prompt("What would you like to do?").toLowerCase()
const todos = ["Collect chicken eggs"]
while (input !== "quit" && input !== "q") {
    if (input === 'list') {
        listAllTodos()
    } else if (input === 'new') {
        const newTodo = prompt("OK, what is the new todo?")
        todos.push(newTodo)
        console.log(`${newTodo} is added to the list!`)
    } else if (input === 'delete') {
        const indexStr = prompt('OK, enter the index to delete')
        const index = parseInt(indexStr)
        if (Number.isNaN(index)) {
            console.log("Unknow index")
        } else {
            const deleted = todos.splice(index, 1)
            console.log(`OK, deleted ${deleted}`)
        }
    }
    input = prompt("What would you like to do?").toLowerCase()
}
alert("OK, you quit the app")

function listAllTodos() {
    console.log('**************')
    for (let i = 0; i < todos.length; i++) {
        console.log(`${i}: ${todos[i]}`)
    }
    console.log('**************')
}