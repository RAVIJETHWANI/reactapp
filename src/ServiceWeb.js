import React from "react";

import Card from "./CardWeb";
import Sdata from "./Sdata";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4 ">
                           {
                               Sdata.map((val,index)=>{
                                   return <Card
                                   key={index}
                                   id={index}
                                   imgsrc={val.imgsrc}
                                   sname={val.sname}
                                   />
                               })
                           }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;