import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { SidebarOpen } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={SidebarOpen}>
          <FaBars />
        </button>
        {/* nav links later */}
      </div>
    </nav>
  );
};

export default Navbar;
