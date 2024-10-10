import { Link } from "react-router-dom";
import { navlink } from "../data/dummydata";
import { useState } from "react";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';


const Header = () => {
  const [responsive, setResponsive] = useState(false)
  return (
    <header>
      <div className="container flex-sb">
        <Link to='/' className="logo">
          🤖
        </Link>
        <div className={responsive ? 'hideMenu' : 'nav'}>
          {navlink.map((link, i)=>(
          <Link className="link" key={i} to={link.url}>{link.text}</Link>
          ))}
        </div>
        <button className="toggle" onClick={() => setResponsive(!responsive)}>
          <MenuSharpIcon className="toggleIcon" />
        </button>
      </div>  
    </header>
  )
}

export default Header