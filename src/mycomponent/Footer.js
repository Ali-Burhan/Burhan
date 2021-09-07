import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="container-fluid">
          <div className="row">
          <div className="col-l-12">
            <footer class="py-3 my-4 bg-dark text-white">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
      <li class="nav-item"><Link to="/Personal" class="nav-link px-2 text-muted">Personal</Link></li>
      <li class="nav-item"><Link to="/Blog" class="nav-link px-2 text-muted">Blog</Link></li>
      <li class="nav-item"><Link to="/Address" class="nav-link px-2 text-muted">Address</Link></li>
      <li class="nav-item"><Link to="/Contact" class="nav-link px-2 text-muted">Contact Me</Link></li>
    </ul>
    <p class="text-center text-muted">© 2021 Personal, BurhanSE</p>
  </footer>
          </div>
          </div>
        </div>
    )
}
