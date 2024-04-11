// importing the logo 
import logo from "../assets/1375106.png"

function Navbar() {
  return (
    <div className = "navBar">
            <img src={logo} alt={"logo"} width="80" height="80"/>
            <h3>PhotoFolio</h3>
        </div>
  );
}

export default Navbar;
