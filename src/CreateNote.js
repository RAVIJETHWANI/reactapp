import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

//import { Button } from '@mui/material';
const CreateNote =(props)=>{
    const [expend,setExpend]=useState(false);
    const [note,setNote]=useState({
        title:"",
        content:""
    })
    const InputEvent = (event)=>{
        const {name,value}=event.target
        setNote((prevData)=>{
            return{ ...prevData,
                [name]:value
                
            }
           
            
        })
        //console.log(note)
     

    }
    const addEvent=()=>{
        props.passNote(note)
        setNote({
            title:"",
            content:"",
        })
    }
    const expendIt =()=>{
        setExpend(true)
    }
    const backto =()=>{
        setExpend(false)
    }
    return (
        <>
          <div className="main_note" onDoubleClick={backto}>
              <form>
                {expend?  <input type="text" name="title" value={note.title} placeholder="title" onChange={InputEvent}/>:null}
                  <br/>
                  <textarea placeholder="write a note" name="content" value={note.content} onChange={InputEvent} onClick={expendIt}  ></textarea>
                  
               {expend? <Button onClick={addEvent}>
                    <AddIcon className="plus_sign" />
                </Button>:null}
              </form>
          </div>
          
        </>
    )
}
export default CreateNote