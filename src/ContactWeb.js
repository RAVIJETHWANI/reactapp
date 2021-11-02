import React, { useState } from "react";


const Contact = () => {
    const [data,setData]=useState({
        fullName:"",
        phone:"",
        email:"",
        msg:"",

    });
    const InputEvent=(event)=>{
       const value=event.target.value
    const name=event.target.name;
    setData((preval)=>{
        return {
            ...preval,
        [name]:value,
        }
    })
    }
    const formSubmit=(e)=>{
        e.preventDefault()
        alert(`my name is ${data.fullName} my mobile number is ${data.phone} my email address is ${data.email} and my message is ${data.msg}`)
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container-fluid contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class=" form-group mt-3">
                                <label for="exampleInputEmail1">Fullname</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="fullName" value={data.fullName} onChange={InputEvent} placeholder="Enter your name" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
                            </div>
                            <div class=" form-group mt-3">
                                <label for="exampleInputEmail1">Phone number</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter ypur number" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your phone with anyone else.</small>
                            </div>
                            <div class=" form-group mt-3">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} onChange={InputEvent} placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class=" form-group mt-3">
                                <label for="exampleInputPassword1">message</label>
                                <textarea type="text" class="form-control" id="exampleInputPassword1" name="msg" value={data.msg} onChange={InputEvent} />
                            </div>
                            <div class="form-check  mt-3">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div className="col-12  mt-3">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;