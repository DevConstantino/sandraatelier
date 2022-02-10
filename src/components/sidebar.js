import React from "react";
import { TiSocialInstagram } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillChatDotsFill } from "react-icons/bs";

function Sidebar() {
	return (
		<nav className="side-nav">
			<ul className="nav flex-column">
				<li className="nav-item">
					<button className="btn">
						<TiSocialInstagram />
					</button>
				</li>
				<li className="nav-item">
					<button className="btn">
						<BsFillChatDotsFill />
					</button>
				</li>
				<li className="nav-item">
					<button className="btn">
						<BsFillChatDotsFill />
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Sidebar;
