import { Link } from "react-router-dom";
import { RiTwitterLine } from "react-icons/ri";
import { DiGithubAlt } from "react-icons/di";
import { SiGmail } from "react-icons/si";

const Footer = () => {
	return (
		<footer className="border-top rounded-pill">
			<a
				class="nav-link active"
				aria-current="page"
				href="https://github.com/DevConstantino"
				target="_blank"
			>
				<p className="madeWho my-auto">Feito por Matheus Constantino</p>
			</a>
		</footer>
	);
};

export default Footer;
