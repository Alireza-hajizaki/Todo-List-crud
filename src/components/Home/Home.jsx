import React from 'react';
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import  "./Home.css";


const Home = () => {
  return (
    <div>
        <header>
        <h1>To Do List</h1>
      </header>
      <form action="components/Home/Home">
        <input type="text" className="todo-input" />
        <div className="todo-button" type="submit">
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
          <div className="todo">
            <li className="todo-item">learn js</li>
            <button className="complete-btn">
              <IoCheckmarkDoneCircleSharp />
            </button>
            <button className="edit-btn">
              <FaEdit />
            </button>
            <button className="trash-btn">
            <AiFillDelete />
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Home;