import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  FiLogOut,
  FiPackage,
  FiBriefcase,
  FiClipboard,
  FiMail,
} from "react-icons/fi"; // Import icons from react-icons
import { useAuth } from "../../firebase/auth";

const Sidebar = () => {
  const router = useRouter();

  const { signOut: logout } = useAuth();

  if (
    router.pathname.includes("/login") ||
    router.pathname.includes("/register")
  ) {
    return <></>;
  }

  return (
    <div style={styles.sidebar} className="sidebar">
      <img src="/assets/img/logo-1.png" style={styles.logo} alt="Logo" />
      <ul style={styles.menu}>
        <li style={styles.menuItem}>
          <Link href={"/admin/dashboard"}>
            <a>
              <FiPackage style={styles.menuIcon} /> Projects
            </a>
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link href={"/admin/business-queries"}>
            <a>
              <FiBriefcase style={styles.menuIcon} /> Business Queries
            </a>
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link href={"/admin/feedback"}>
            <a>
              <FiClipboard style={styles.menuIcon} /> Feedback
            </a>
          </Link>
        </li>
        <li style={styles.menuItem}>
          <Link href={"/admin/career-queries"}>
            <a>
              <FiMail style={styles.menuIcon} /> Career Query
            </a>
          </Link>
        </li>
      </ul>
      <div style={styles.logout} onClick={logout}>
        <FiLogOut style={styles.logoutIcon} />
        Logout
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    marginTop: "10px",

    marginLeft: "10px",
    display: "flex",
    flexDirection: "column",
    height: "95vh",
    justifyContent: "space-between",
    borderRadius: "25px",
  },
  logo: {
    marginBottom: "80px",
  },
  menu: {
    flexGrow: 1,
    listStyle: "none",
    padding: 0,
  },
  menuItem: {
    display: "flex",
    alignItems: "center",

    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  menuIcon: {
    marginRight: "8px",
  },
  logout: {
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  logoutIcon: {
    marginRight: "8px",
  },
};

export default Sidebar;
