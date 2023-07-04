import React, {useState} from 'react';
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import  "./Home.css";
import TodoList from "../TodoList/TodoList";


const Home = () => {

    const[todoInput , setTodoInput] = useState('')
    const[todosList , setTodosList] = useState([])


    const handleChangeInput = (value) => {
      setTodoInput(value)
    }

    const addTodoFunc = () => {
        const newTodo = {
            id: crypto.randomUUID(),
            title: todoInput,
            isDone: false
        }
        setTodosList([...todosList , newTodo])
        setTodoInput("")
    }

    const deleteTodo = (id) => {
        const orginalTodos = [...todosList];
        const filtered = orginalTodos.filter((todo => todo.id !== id))
        setTodosList(filtered)
    }

    const isDoneTodo = (id) => {
        const orginalTodos = [...todosList];
        const index = orginalTodos.find((todo) => todo.id === id)
        if(index.isDone === false){
            index.isDone = true
        }else{
            index.isDone = false
        }
        setTodosList(orginalTodos , index)
    }

  return (
    <div>
        <header>
        <h1>To Do List</h1>
      </header>
      <form action="components/Home/Home">
        <input
            type="text"
            className="todo-input"
            onChange={(e) => handleChangeInput(e.target.value)}
            value={todoInput}
        />
        <div className="todo-button" type="submit" onClick={addTodoFunc}>
          <BsPlusCircleFill className="plus-icon" /> 
        </div>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>

      <div className="todo-container">
        <ul className="todo-list">
            {todosList.map(todo => (
                <TodoList
                    key = {todo.id}
                    id = {todo.id}
                    title = {todo.title}
                    isDone = {todo.isDone}
                    // editFunc = {}
                    deleteFunc = {deleteTodo}
                    isDoneFunc = {isDoneTodo}
                />
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Home;