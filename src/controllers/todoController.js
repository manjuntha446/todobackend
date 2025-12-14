import Todo from "../models/Todo.js";




export const getTodos=async(req,res)=>{
    const todos = await Todo.find();
    res.json(todos);
};

export const createTodo = async (req, res) => {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
};

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(todo);
};

export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Todo deleted" });
};