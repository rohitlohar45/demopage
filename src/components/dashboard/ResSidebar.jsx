import React from "react";
import {
  FiLogOut,
  FiPackage,
  FiBriefcase,
  FiClipboard,
  FiMail,
} from "react-icons/fi";

import { useAuth } from "../../firebase/auth";
import {
  BsCart3,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsGrid1X2Fill,
  BsPeopleFill,
} from "react-icons/bs";
import Link from "next/link";

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src="/assets/img/logo-1.png" className="logo" alt="Logo" />
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link href={"/admin/dashboard"}>
            <a>
              <BsGrid1X2Fill className="icon" /> Projects
            </a>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href={"/admin/business-queries"}>
            <a>
              <BsFillArchiveFill className="icon" /> Business Queries
            </a>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href={"/admin/feedback"}>
            <a>
              <BsFillGrid3X3GapFill className="icon" /> testimonials
            </a>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link href={"/admin/career-queries"}>
            <a>
              <BsPeopleFill className="icon" /> Career Query
            </a>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
