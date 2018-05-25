import React from "react";
import "./navbar.css";



const Navbar = props => (
  <nav className = 'navbar'>
    <ul>
      <li className = 'brand'>
      
        <h1>TV App Name</h1>
        
        <form className='bounce' action="/login/google">
          <input type="submit" value="Sign-in with Google" />
        </form>
      </li>
    </ul>
  </nav>    

)
export default Navbar;

{/*   
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span>
  </div> */}
;


