import React from "react";

const Card = ({handleRef, actualTodos }) => {
  return (
    <>
      {actualTodos.map((todos, index) => {
        if (actualTodos.length === todos.id) {
          return (
            <div className="card" ref={handleRef} key={todos.id}>
               <p> todos.length {actualTodos.length}</p> 
                <p>id : {todos.id}</p>
                <p>{index }</p>
              <p>{todos.title}</p>
            </div>
          )
        }
        else{
            return(
            <div className="card" key={todos.id}>
              <p>{todos.title}</p>
              <p>{todos.id}</p>
            </div>
            )
        }
      })}

    </>
  );
};

export default Card;
