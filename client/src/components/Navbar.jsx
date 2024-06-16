
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout} = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/"><img src={Logo} alt="logo" /></Link>
        </div>
        <div className="links">
          <Link className="link" to='/?cat=art'>
            <h6>ART</h6>
          </Link>
          <Link className="link" to='/?cat=science'>
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to='/?cat=technology'>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to='/?cat=cinema'>
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to='/?cat=design'>
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to='/?cat=foods'>
            <h6>FOODS</h6>
          </Link>
          <span className="write"><Link className="writelink" to='/write'>Write</Link></span>
          {currentUser ? <span onClick={logout}>Logout</span>: <Link className="link" to='/login'>
            Login
          </Link>}
          <span className="user">{currentUser?.username}</span>
          <div className="navuser">{currentUser.img && <img src={currentUser.img} alt="image" />}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
