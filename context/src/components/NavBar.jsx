import { NavLink } from "react-router-dom"

import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
        {/* LINK ATIVO */}
        <NavLink to={"/"} className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to={"/nomes"} className={({isActive}) => (isActive ? "active" : "")}>Nomes</NavLink>
    </div>
  )
}

export default NavBar