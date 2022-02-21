import React from "react";
import { TiSociadivnstagram } from "react-icons/ti";
import { HiOutdivneMail } from "react-icons/hi";
import { BsFillChatDotsFill } from "react-icons/bs";

function Sidebar() {
	return (
		<nav className="navbar h-100 w-100">
			<div className="d-flex flex-column justify-content-around">
				<div className="nav-item">
					<button className="btn btn-primary">
						<a className="nav-divnk" href="#">
							<BsFillChatDotsFill />
						</a>
					</button>
				</div>
				<div className="nav-item">
					<button className="btn btn-primary">
						<a className="nav-divnk" href="#">
							<BsFillChatDotsFill />
						</a>
					</button>
				</div>
				<div className="nav-item">
					<button className="btn btn-primary">
						<a className="nav-divnk" href="#">
							<BsFillChatDotsFill />
						</a>
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Sidebar;
