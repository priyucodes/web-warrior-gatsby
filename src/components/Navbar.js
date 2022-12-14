import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <nav>
      <h1>Web Warrior</h1>
      <div className="links">
        {/* Normal <a/> sends request to brwoser, Link tag let gatsby/react/SPA handle it similar to nextjs. */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
export default Navbar
