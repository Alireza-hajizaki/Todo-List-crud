import React from 'react';

const SelectTodo = ({ setFilterOption }) => {


    return (
        <div className="select">
            <select name="todos" className="filter-todo" onChange={(e) => {
                setFilterOption(e.target.value)
            }}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
        </div>
    );
};

export default SelectTodo;