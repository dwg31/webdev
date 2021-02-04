var todos = [];

var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        console.log("*********");
        todos.forEach(function(c) {
            console.log(c);
        })
        console.log("*********");
    } else if (input === "new") {
        var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
    } else if (input === "delete") {
        var index = prompt("Enter the index to delete");
        todos.splice(index, 1);
    }

    input = prompt("What would you like to do?");
}

console.log("You quit the app");