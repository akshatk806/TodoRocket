import React from 'react'
import "./style.css"

const Todo = () => {
  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <h1 style={{color:"white", marginBottom:"4rem", fontSize:"5rem"}}>Welcome to <span style={{color:"#f2bb0c"}}>TodoRocket</span> 🚀</h1>
                    <img src="./images/todo.svg" alt="todoimage" />
                    <figcaption>Add Your Task Here ✌️</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="✍️Add Task" className="form-control" />
                    <i className="fa fa-plus add-btn"></i>
                </div>
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All"><span>CHECK LIST</span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo