import React, { useEffect, useState } from 'react'
import "./style.css"

// get the local storage data back 
const getLocalData = ()=>{
    const lists = localStorage.getItem("myTodoList");

    if(lists) {
        return JSON.parse(lists);     // lists to hamara string hoga, first hum string ko array me convert karenge then hum is lists ko items me assign kar denge in line 18
    }
    else {
        return [];
    }
}

const Todo = () => {
    const [inputData, setInputData] = useState(""); 
    const [items, setItems] = useState(getLocalData());

    // function for adding the items in todo list
    const addItem = ()=>{
        if(!inputData) {
            alert("Please fill the Task")
        }
        else {
            const myNewInputData = {
                id:new Date().getTime().toString(),
                name:inputData
            }
            setItems([...items, myNewInputData]);
            setInputData("");
        }
    }

    // function to delete the task from DOM
    const deleteItem = (index)=>{
        // user ne kisko click kiya uski me yha get kar rha hu
        const updatedItems = items.filter((currElem)=>{
            return currElem.id !== index;
        });
        setItems(updatedItems)
    }

    // removing all the tasks in one click
    const removeAll = () =>{
        setItems([]);
    }


    // adding the task in localStorage using useEffect
    useEffect(()=>{
        localStorage.setItem("myTodoList", JSON.stringify(items));        // localStorage me hum sirf string hi paas kar sakte h, We want to make sure that inputs must be string only
    },[items]);        // jab mere items ki values change hogi tab hi useEffect run karega and local storage update hoga

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
                        items.map((currElem)=>{
                            return (
                                <div key={currElem.id} className="eachItem">
                                    <h3>{currElem.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit add-btn"></i>
                                        <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(currElem.id)}></i>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {/* Remove All button */}
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo