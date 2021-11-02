import React, { useState } from "react";
import "./Todo2.css"

const Todo=()=>{
    const [inputData,setInputData]=useState("");
    const [item,setItem]=useState([]);
    const [toggle,setToggle]=useState(true)
    const [isEditItem,setIsEditItem]=useState(null)
    const InputEvent = (event)=>{
        const value = event.target.value;
        setInputData(value)
    }
    const addItem= ()=>{
        if(!inputData){

        }else if(inputData &&!toggle){
                // !toggle kyoki toggle ki value useState me true hai
               // const allInputData = {id:new Date().getTime().toString(), name:inputData}
            //setItem([...item,allInputData ]) in dono line ke karan jo ki else me h elemnt ki id mil jayegi
                setItem(
                    item.map((elemnt)=>{
                        //isEditItem ko id setIsEdidItem me likhi id se mil jayegi
                        if(elemnt.id===isEditItem){
                            return {...elemnt,name:inputData}
                        }
                        return elemnt
                    })
                )
               
             
             setToggle(true)
             setInputData("")
             setIsEditItem(null);
        }
        else{
            const allInputData = {id:new Date().getTime().toString(), name:inputData}
            setItem([...item,allInputData ])
            setInputData("")
        }
    }
    const deleteItem = (index)=>{
       const updatedItem= item.filter((ele)=>{
            return index!==ele.id
        })
       setItem(updatedItem)
    }
    const removeAll=()=>{
      setItem([])
    }
    const editItem = (id)=>{
        let newEditItem= item.find((elem)=>{
            return elem.id===id
        })
         console.log(newEditItem)
         setToggle(false)
        setInputData(newEditItem.name)
        setIsEditItem(id);
     }
    return(
        <>
           <div className="main-div">
               <div className="child-div">
                   <h1>add your list here</h1>
                   <div className="addItems">
                   <input type="text" placeholder= "✍️ add item" value={inputData} onChange={InputEvent}/>

                   {
                       toggle? <i className="fa fa-plus add-btn" onClick={addItem} title="add item"></i>:
                        <i className="far fa-edit add-btn" onClick={addItem} title="add item"></i>

                   }
                  
                   </div>
                   <div className="showItems">
                    {
                        item.map((elem)=>{
                            return(
                                <div className="eachItem" key={elem.id}>
                           <h3 >{elem.name}</h3>
                           <i className="far fa-edit delete-btn" onClick={()=>editItem(elem.id)} title="edit item"></i>
                           <i className="far fa-trash-alt delete-btn" onClick={()=>deleteItem(elem.id)} title="delete item"></i>
                       </div>
                            )
                        })
                    }
                       
                       <div className="showItems">
                           <button onClick={removeAll}>romove all</button>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}
export default Todo