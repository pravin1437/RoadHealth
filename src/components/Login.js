import React from 'react'
export default function login(props) {
    return (
        <form>
                <div className='container'>
                <div className="container x-auto col-10 col-md-8 col-lg-6 form-check" >
                <div className="mb-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label d-inline-flex p-2">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className='form-active'>We'll never share your email with anyone else.</div>
                    {/* {`form-text-${ props.mode ==='light'? 'dark' : 'light'}`} */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 x-auto col-10 col-md-8 col-lg-6 form-check form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <div className="mb-3 x-auto col-10 col-md-8 col-lg-6 form-check">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
        </div>
        </div>
            </form>
    )
}
