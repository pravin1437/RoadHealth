import React from 'react'

export default function Signup() {
  return (
      <form>
          <div className="container">
              <div className="mb-3 mx-auto col-10 col-md-8 col-lg-6 ">
              <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Enter your Name</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 mx-auto col-10 col-md-8 col-lg-6">
                    <label for="exampleInputPassword1" className="form-label">Enter a New Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 mx-auto col-10 col-md-8 col-lg-6">
                    <label for="exampleInputPassword1" className="form-label">Enter the new password again</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 mx-auto col-10 col-md-8 col-lg-6 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Keep me Logged in</label>
          </div>
          <div className="mb-3 mx-auto col-10 col-md-8 col-lg-6 form-check">
              
          <button type="submit" className="btn btn-primary">Submit</button>
              </div>
              </div>
            </form>
  )
}
