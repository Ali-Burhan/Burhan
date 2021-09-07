import React from 'react'
import "./adressstyle.css"
export default function Address() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h1>Information about me</h1>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-4">
                    <h3>Address</h3>
                    <p>Dera Bhattiyan Jivan pua kalan near dakhana khas bai pass road, Sheikhupura</p>
                   
                   <img src="/images/skp.jpg" alt="" className="imgg img-fluid"/>
                <hr />
                </div>
                <div className="col-lg-4">
                    <h3>Personal</h3>
                    <p><b>Father Name:</b> Qaiser Nadeem</p> 
                    <p><b>Name:</b> Ali Burhan</p>
                    <p><b>Father Occupation:</b> IT manager</p>
                    <p><b>Age:</b> 19</p>
                    <p><b>Current Education:</b> BSCS(HONS)</p>
                    <p><b>Institute:</b> NFC IE&FR</p>
                    <p><b>Date of Birth:</b> 22/08/2002</p>
                    <hr />
                </div>
                <div className="col-lg-4">
                    <h3>
                        Lorem
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate magni minima eveniet suscipit deserunt est placeat nobis expedita dicta non vero ullam voluptas quisquam cumque dolore in ipsum ea, illum fugit praesentium excepturi voluptatibus! Quis repellat repellendus recusandae tenetur nobis voluptatibus non cumque possimus, deleniti explicabo expedita adipisci deserunt pariatur doloribus id doloremque fugit nesciunt? Minus id cum numquam modi laudantium nobis ipsam beatae natus reiciendis dolores, tempore ratione voluptate nisi pariatur, nihil non nesciunt excepturi, explicabo sint facilis vel?</p>
               <hr />
                </div>
            </div>
        </div>
    )
}
