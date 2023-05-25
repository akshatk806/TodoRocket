import React, { useState } from 'react'
import "./style.css"

const Todo = () => {
    const [inputData, setInputData] = useState(""); 
    const [items, setItems] = useState([]);

    // function for adding the items in todo list
    const addItem = ()=>{
        if(!inputData) {
            alert("Please fill the Task")
        }
        else {
            setItems([...items, inputData]);
            setInputData("");
        }
    }

  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <h1 style={{color:"white", marginBottom:"4rem", fontSize:"5rem"}}>Welcome to <span style={{color:"#f2bb0c"}}>TodoRocket</span> 🚀</h1>
                <figure>
                    <img src="./images/todo.svg" alt="todoimage" />
                    <figcaption>Add Your Task Here ✌️</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="✍️Add Task" className="form-control" value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
                    <i className="fa fa-plus add-btn" onClick={addItem}></i>
                </div>

                {/* show our items */}
                <div className="showItems">
                    {
                        items.map((currElem, index)=>{
                            return (
                                <>
                                    <div className="eachItem" key={index}>
                                        <h3>{currElem}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn"></i>
                                            <i className="far fa-trash-alt add-btn"></i>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

                {/* Remove All button */}


                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All"><span>CHECK LIST</span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo