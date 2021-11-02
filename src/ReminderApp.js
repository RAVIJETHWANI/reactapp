import React, { useState } from "react";
import ReminderData from "./ReminderData";
import List from "./ReminderList"

const ReminderApp=()=>{
    const [people,SetPeople]=useState(ReminderData);
    return(
        <main>
            <section className="container">
                <h3>{people.length} birthday today</h3>
                <List people={people}/>
                <button onClick={()=>{
                    SetPeople([])
                }}> Clear All</button>
            </section>
        </main>
    )
}
export default ReminderApp;