import React from 'react'
import "./contactstyle.css"
export default function Contact() {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-sm-12">
          <h1>

            Contact Me
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
        <label for="validationDefault01" className="form-label">First name</label>
          <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
        </div>
        <div className="col">
        <label for="validationDefault01" className="form-label">Last name</label>
          <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
        </div>
      </div>
      <div classNameName="row">
        <div className="col-md-12 my-1">
        <label for="validationDefault01" className="form-label email">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Enter your Email" />
        </div>
      </div>
      <div classNameName="row ">
        <div classNameName="col-sm-12">
          <textarea name="Comment" id="" cols="30" rows="10" placeholder ="Enter your thoughts"></textarea>      
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 my-5">
        <button type="button" class="btn btn-outline-dark">Send</button>
        </div>
      </div>
    </div>
  )
}
