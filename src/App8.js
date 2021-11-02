import React,{useState} from "react";

import TodoList from "./TodoList";


const App8=()=>{
    const [inputList,setInputList]=useState("");

    const [items, setItems]=useState([])
    const itemEvent=(event)=>{
        setInputList(event.target.value)
    }
    const listofItems=()=>{
        

      setItems((olditems)=>{
          return [...olditems,inputList]
         
      })
      setInputList("")

      
    }
    const deleteItems=(id)=>{
       console.log("gone")
       setItems((olditems)=>{
           return olditems.filter((arrayElement,index)=>{
               return index!==id
           })
       })
      }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add a item"  onChange={itemEvent} name="show" value={inputList}/>
                <button onClick={listofItems}>+</button>
                <ol>
                   {/* <li>{inputList}</li>*/}
                    {
                        items.map((itemVal,index)=>{
                          return <TodoList key={index} id={index} text={itemVal} onSelect={deleteItems}/>
                            
                        })
                    }
                </ol>
                </div>
            </div>
        </>
    )

}

export default App8;