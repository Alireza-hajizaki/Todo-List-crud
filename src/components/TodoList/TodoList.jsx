import React from 'react';
import {IoCheckmarkDoneCircleSharp} from "react-icons/io5";
import {FaEdit} from "react-icons/fa";
import {AiFillDelete} from "react-icons/ai";

const TodoList = ({id, title, isDone, deleteFunc , editFunc , isDoneFunc}) => {
    return (
        <div className={isDone ? "completed todo" : "todo"}>
            <li className="todo-item">{title}</li>
            <button className="complete-btn" onClick={() => isDoneFunc(id)}>
                <IoCheckmarkDoneCircleSharp />
            </button>
            <button className="edit-btn" onClick={() => editFunc(id , title ,isDone)}>
                <FaEdit />
            </button>
            <button className="trash-btn" onClick={() => deleteFunc(id)}>
                <AiFillDelete />
            </button>
        </div>
    );
};

export default TodoList;