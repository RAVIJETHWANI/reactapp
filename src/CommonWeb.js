import React from "react";
import { NavLink } from "react-router-dom";

const common = (props) => {
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name} <strong className="brand-name">with krishna</strong></h1>
                                    <h2 className="my-3">We are the team of talented devoloper making website</h2>
                                
                                <div className="mt-3">
                                    <NavLink className="btn-get-started" to={props.visit}>{props.btname}</NavLink>
                                </div>
                                </div>
                            
                            <div className="col-lg-6 px-4 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} width="50%" alt="australia" className="img-fluid animated" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default common;