import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function QueryForm() {
    const { isAuthenticated, user} = useAuth0();
    return (
        <div className='bg-light p-3 rounded'>
             <h4 className='text-center p-3 mb-3'>Get Quote Instantly in a Minute</h4>
            <form >
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Name' value={isAuthenticated ? user.name : ""}/>
                </div>
                <div className="mb-3">

                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' 
                    value={isAuthenticated ? user.email : ""}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='Mobile' />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='City' />
                </div>
                <div className='d-flex justify-content-center'>
                <button type="submit" className="btn btn-primary me-2">Submit</button>
                </div>
            </form>
        </div>
    )
}
