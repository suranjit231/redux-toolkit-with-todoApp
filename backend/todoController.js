const todos = [
    { "text": "Go to Gym at 9", "completed": false },
    { "text": "Go to Office at 10", "completed": false },
    { "text": "Meeting at 11", "completed": false }
];

export function getTodos(req, res, next) {
    setTimeout(() => {
        res.end(JSON.stringify(todos));
    }, 1000); // 1 second delay
}

export function addTodos(req,res,next){
    console.log("req.body: ", req.body);
    const todo = req.body;

    todos.push(todo);
    setTimeout(() => {
        res.end(JSON.stringify(todo));
    }, 1000); // 1 second delay

}
