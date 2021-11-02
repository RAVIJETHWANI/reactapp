import React from "react"
import { FaTimes} from 'react-icons/fa';
const TodoList=(props)=>{
    return (
        <>
            <div className="Todo_style">
             
              <li > 
              <FaTimes
               className="fa fa-time"
               onClick={()=>{
                  props.onSelect(props.id)
                  }} 
              />
              {props.text}
              </li> 
            </div>
         
         </>
    )
}
export default TodoList