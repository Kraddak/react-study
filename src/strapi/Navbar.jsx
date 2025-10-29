import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { SidebarOpen, setPageId } = useGlobalContext();

  const handleMouseOver = (e) => {
    if (!e.target.classList.contains("nav-link")) setPageId(null);
  };

  return (
    <nav onMouseOver={handleMouseOver}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={SidebarOpen}>
          <FaBars />
        </button>
        <NavLinks></NavLinks>
      </div>
    </nav>
  );
};

export default Navbar;
