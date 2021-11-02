import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import CreateNote from "./CreateNote";
const NoteApp =()=>{
    const [addItem,setItem]=useState([])
    const addNote=(note)=>{
        setItem((prevData)=>{
            return [...prevData,note]
        })

    }
    const onDelete = (id)=>{
        setItem((oldData)=>
        oldData.filter((val,indx)=>{
            return indx!==id;
        })
        )
    }
    return (
        <>
           <Header />
           <CreateNote passNote={addNote} />
          
           {addItem.map((val,index)=>{
               return (
                <Note 
                   key={index}
                   id={index}
                   title={val.title}
                   content={val.content}
                   deleteItem={onDelete}
               />
               )
           })
           }
           <Footer />
          
        </>
    )
}
export default NoteApp