import React, {useEffect, useState} from 'react';
import { BsPlusCircleFill } from "react-icons/bs";
import { MdFileDownloadDone } from "react-icons/md";
import  "./Home.css";
import TodoList from "../TodoList/TodoList";
import SelectTodo from "../SelectTodo/SelectTodo";


const Home = () => {

    const[todosList , setTodosList] = useState([])
    const[sortTodo , setSortTodo] = useState([])
    const[todoInput , setTodoInput] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [idEditedTodo , setIdEditedTodo] = useState(null)
    const [filterOption , setFilterOption] = useState('all')


    const handleChangeInput = (value) => {
      setTodoInput(value)
    }

    const addTodoFunc = () => {
        const newTodo = {
            id: crypto.randomUUID(),
            title: todoInput,
            isDone: false
        }
        if(todoInput){
        setTodosList([...todosList , newTodo])
        setSortTodo([...sortTodo , newTodo])
        setTodoInput("")
        }else{
            return false;
        }
    }

    const deleteTodo = (id) => {
        const orginalTodos = [...todosList];
        const filtered = orginalTodos.filter((todo => todo.id !== id))
        setTodosList(filtered)
    }

    const editTodo = (id , title , isDone) => {
        !isDone && ( setTodoInput(title) || setIsEdit(true) || setIdEditedTodo(id))
    }

    const addEditedTodo = () => {
        const orginalTodos = [...todosList];
        const index = orginalTodos.findIndex(todo => todo.id === idEditedTodo)
        orginalTodos[index].title = todoInput
        setTodosList(orginalTodos)
        setTodoInput("")
        setIsEdit(false)
    }

    const checkBtn = () => {
        return (
            isEdit ? <MdFileDownloadDone className="plus-icon" onClick={addEditedTodo} /> : <BsPlusCircleFill className="plus-icon"  onClick={addTodoFunc} />
        )

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

    useEffect(()=>{
        switch (filterOption) {
        case('all'):{
            const orginalTodos = [...todosList]
            setSortTodo(orginalTodos)
            break;
        }case('completed'):{
           const orginalTodos = [...todosList]
           let completedTodos = orginalTodos.filter(todo => todo.isDone)
           setSortTodo(completedTodos)
           break;
        }case("incomplete"):{
           const orginalTodos = [...todosList]
           let inCompletedTodos = orginalTodos.filter(todo => !todo.isDone)
           setSortTodo(inCompletedTodos)
           break;
        }default:{
           const orginalTodos = [...todosList]
           setSortTodo(orginalTodos)
           break;
        }
        }
    },[filterOption])



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
        <div className="todo-button" type="submit">
            {checkBtn()}
        </div>
          <SelectTodo
              setFilterOption = {setFilterOption}
          />
      </form>

      <div className="todo-container">
        <ul className="todo-list">
            {sortTodo.map(todo => (
                <TodoList
                    key = {todo.id}
                    id = {todo.id}
                    title = {todo.title}
                    isDone = {todo.isDone}
                    editFunc = {editTodo}
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