import React from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import { Outlet } from "react-router-dom";

function NavBar({ darkMode, onClick }) {
	return (
			<>
				<header className={`nav-wrapper ${darkMode ? "header-dark" : ""}`}>
					<div className="nav-elements container">
						<div>
							<div className="nav-heading">Where in the world?</div>
						</div>
						<div className="background-mode-icon" onClick={onClick}>
							{darkMode ? <IoMoonOutline className="icon-moon" /> : <IoMoonSharp className="icon-moon"/>}
							<div className="mode">{darkMode ? "Light Mode" : "Dark Mode"}</div>
						</div>
					</div>
				</header>
				<Outlet/>
			</>
	);
}

export default NavBar;
