import { useGlobalContext } from "./Context";
import sublinks from "./data";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSideBarOpen, SidebarClose } = useGlobalContext();

  const createArticle = (item) => {
    const { links, page, pageId } = item;
    return (
      <article key={pageId}>
        <h4>{page}</h4>
        <div className="sidebar-sublinks">
          {links.map((link) => {
            const { url, icon, label, id } = link;
            return (
              <a key={id} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </article>
    );
  };

  return (
    <aside className={isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={SidebarClose}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item) => createArticle(item))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
