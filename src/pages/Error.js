import { Link } from "react-router-dom";
import img from "../imgs/404.svg";

const Error = () => {
	return (
		<body>
			<div className="container-fluid h-100 position-relative">
				<img className="errorImg mb-2 mt-4 mx-auto" src={img} alt="not found" />
				<h1 className="p-1">Ops! Página não encontrada.</h1>
				<p className="p-1">Não foi possível encontrar a página que você procura.</p>
				<button id="errorBtn" className="btn btn-outline-primary mt-3 position-absolute start-50 translate-middle">
					<Link className="link" to="/">
						De volta para o meu Atelier
					</Link>
				</button>
			</div>
		</body>
	);
};

export default Error;
