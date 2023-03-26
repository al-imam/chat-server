import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home">Chat server</NavLink>
        </li>
        <li>
          <button>✨</button>
        </li>
        <li>
          <NavLink to="/Singup">3</NavLink>
        </li>
      </ul>
    </nav>
  );
}
