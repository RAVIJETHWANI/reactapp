import React from "react"
import Images from "./Image";

function Card(pros) {
  return (
    <>
    <div className="cards">
      <div className="card">
      <Images imgsrc={pros.imgsrc} />
    {/*  <img src={pros.imgsrc} alt="myPic" className="card_img" width="700pc" />*/}

        <div className="card_info">
          <span className="card_category">{pros.title}</span>
        
          <h3 className="card_title">{pros.sname}</h3>
          <a href={pros.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
    </>
  )

}
export default Card;