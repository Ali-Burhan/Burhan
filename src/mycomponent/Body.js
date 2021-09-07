import React from 'react'
import "./bodystyle.css"
import { Link } from 'react-router-dom'
export default function Body() {
  return (
<>
<div className="container-fluid back">
<div className="row ">
            <div className="col-12 my-5">
           

              <img src="/pics/ali6.png" alt="" className="aimg"/>
            
              <h1 className = "my-2">BurhanSE</h1>
              <p >Hello! my name Ali Burhan I am currently studuing in BSCS(HONS). I have good touch about the Web Development. I am currently studing in NFC University Faisalabad. i'm now in 3rd semester and i have learnt C++ from university and lot more other things from my father because he is a IT manager</p>
             <Link to = "/Personal" >
              <button type="button" class="btn btn-danger mx-2 my-4">Personal</button>
             </Link>
             <Link to = "/Contact">
              <button type="button" class="btn btn-primary mx-2 my-4">Contact Me</button>
             </Link>
             <Link to = "/Blog">
              <button type="button" class="btn btn-success mx-2 my-4 ">Blog</button>
             </Link>
            </div>
          </div>
</div>
    <div className="container-fluid">

      <div className="row  my-2">
        <div className="col-lg-4  dar text-white scl">
          <a href="https://das.edu.pk
"> <img src="/images/arkam.jpg" alt="" /> </a>
          <h4 className="my-2">
            Dar-e-Arkam School
          </h4>
          <p> hic accusantium rerum harum ipsam ullam quia pariatur sapiente blanditiis debitis fugit necessitatibus ad eveniet, autem repellendus ducimus qui? Enim, doloremque sapiente? Perspiciatis repudiandae distinctio nesciunt exercitationem vero, deserunt beatae maiores eos excepturi, quisquam </p>
          <a href="https://das.edu.pk">

          <button type="button" class="btn btn2 btn-outline-primary text-white">Check the school</button>
          </a>
        </div>
        <div className="col-lg-4 my-2 asp text-white scl">
          <a href="https://www.aspirecolleges.edu.pk
"> <img src="/images/aspire.jpg" alt="" /> </a>
          <h4 className="my-2">
            Aspire Group Of Colleges
          </h4>
          <p> hic accusantium rerum harum ipsam ullam quia pariatur sapiente blanditiis debitis fugit necessitatibus ad eveniet, autem repellendus ducimus qui? Enim, doloremque sapiente? Perspiciatis repudiandae distinctio nesciunt exercitationem vero, deserunt beatae maiores eos excepturi, quisquam </p>
         <a href="https://www.aspirecolleges.edu.pk">

          <button type="button" class="btn btn2  text-white btn-outline-danger">visite Aspire college</button>
         </a>
        </div>
        <div className="col-lg-4 my-2 nfc text-white scl">

          <a href="https://www.iefr.edu.pk
"> <img src="/images/nfc.jpg" alt="" /> </a>
          <h4 className="my-2">
            NFC IEFR
          </h4>
          <p> hic accusantium rerum harum ipsam ullam quia pariatur sapiente blanditiis debitis fugit necessitatibus ad eveniet, autem repellendus ducimus qui? Enim, doloremque sapiente? Perspiciatis repudiandae distinctio nesciunt exercitationem vero, deserunt beatae maiores eos excepturi, quisquam </p>
          <a href="https://www.iefr.edu.pk">

          <button type="button" class="btn btn2  text-white btn-outline-success">Check the University</button>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}
