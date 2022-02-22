import { SiGmail } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
	return (
		<ul class="nav justify-content-center flex-column">
			<li class="nav-item py-2">
				<Link class="nav-link active" aria-current="page" to="">
					<SiGmail />
				</Link>
			</li>
			<li class="nav-item py-2">
				<Link class="nav-link" to="">
					<FiInstagram />
				</Link>
			</li>
			<li class="nav-item py-2">
				<Link class="nav-link" to="">
					<FaFacebookF />
				</Link>
			</li>
			<li class="nav-item py-2">
				<Link class="nav-link" to="">
					<FaShoppingCart />
				</Link>
			</li>
		</ul>
	);
}

export default Sidebar;
