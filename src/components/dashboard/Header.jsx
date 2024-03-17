import React from "react";
import {
	BsFillBellFill,
	BsFillEnvelopeFill,
	BsPersonCircle,
	BsSearch,
	BsJustify,
} from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../../firebase/auth";

function Header({ OpenSidebar }) {
	const { signOut: logout } = useAuth();
	return (
		<header className="header">
			<div className="menu-icon">
				<BsJustify className="icon" onClick={OpenSidebar} />
			</div>
			<div className="header-left"></div>
			<div className="header-right">
				<div className="logout" onClick={logout}>
					<FiLogOut className="logoutIcon" />
					Logout
				</div>
			</div>
		</header>
	);
}

export default Header;
