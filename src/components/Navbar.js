import React from 'react'
import { Link } from 'gatsby'
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" />
      <Link to="/">
        <button className="btn nav-icon">nav</button>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">ホーム</Link>
        </li>
        <li>
          <Link to="/">ブログ</Link>
        </li>
        <li>
          <Link to="/">お問い合わせ</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
