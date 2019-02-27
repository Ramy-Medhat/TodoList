import React  from 'react';

const Todos = ({todos, deleteItem}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteItem(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    )
    :(
        <p className="center">You have nothing to do, yaaaaay!</p>
      )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    
        
    )
}

export default Todos;
