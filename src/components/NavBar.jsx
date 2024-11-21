import React from 'react'

function NavBar() {
  return (
    <div className='d-flex justify-content-between'>
    <div className="search-bar">
  <div className="input-group">
    <span className="input-group-text bg-white border-end-0">
      <i className="fas fa-search" />
    </span>
    <input type="text" className="form-control border-start-0" placeholder="Search users" />
   
  </div>
    </div>
    <div>
    <ul class="nav ">
        <li class="nav-item">
          <a class="nav-link" href="#">Reputation</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link active" href="#">New users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Voters</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Editors</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Moderators</a>
        </li>
      </ul>
    </div>

       </div>
  )
}

export default NavBar