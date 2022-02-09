import React from "react";
import { Link } from "react-router-dom";

type Props = {
  name?: string;
};

const Nav = ({ name }: Props) => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/signin">SignIn</Link>
      </li>
      <li>
        <Link to="/signup">SignUp</Link>
      </li>
      <li>
        <Link to="/somePage">NotFound</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
