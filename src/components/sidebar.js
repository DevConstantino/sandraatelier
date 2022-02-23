import { SiGmail } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Sidebar() {
	return (
		<ul class="nav justify-content-center flex-column">
			<li class="nav-item py-2">
				<button className="btn-outline-primary btnSidebar shadow-lg animation01">
					<a
						target="_blank"
						class="nav-link active m-0 p-0 sideIcons"
						aria-current="page"
						href="#"
					>
						<SiGmail />
					</a>
				</button>
			</li>
			<li class="nav-item py-2">
				<button className="btn-outline-primary btnSidebar shadow-lg animation02">
					<a
						target="_blank"
						class="nav-link active m-0 p-0 sideIcons"
						aria-current="page"
						href="#"
					>
						<FiInstagram />
					</a>
				</button>
			</li>
			<li class="nav-item py-2">
				<button className="btn-primary btnSidebar shadow-lg animation01">
					<a
						target="_blank"
						class="nav-link active m-0 p-0 sideIcons"
						aria-current="page"
						href="#"
					>
						<FaFacebookF />
					</a>
				</button>
			</li>
			<li class="nav-item py-2">
				<button className="btn-outline-primary btnSidebar shadow-lg animation02">
					<a
						target="_blank"
						class="nav-link active m-0 p-0 sideIcons"
						aria-current="page"
						href="#"
					>
						<FaShoppingCart />
					</a>
				</button>
			</li>
		</ul>
	);
}

export default Sidebar;
