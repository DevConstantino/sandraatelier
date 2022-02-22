import { Link } from "react-router-dom";
import img from "../imgs/contact.svg";

const Contato = () => {
	return (
		<body className="d-flex">
			<div>
				<button></button>
				<button></button>
				<button></button>
			</div>
			<div
				className="container-fluid h-100 position-relative w-50 pt-5"
				id="formContact"
			>
				<img
					className="contactImg mb-2 mt-4 mx-auto"
					src={img}
					alt="not found"
				/>
				<h1 className="p-1">Entre em contato comigo.</h1>
				<div className="form-floating mb-3 mx-auto">
					<input
						type="email"
						className="form-control p-0"
						id="floatingInput"
						placeholder="name@example.com"
					></input>
					<label for="floatingInput" className="p-0" id="labelInput">
						Email
					</label>
				</div>
				<div className="form-floating mb-2 mx-auto">
					<textarea
						class="form-control p-0"
						placeholder="Leave a comment here"
						id="floatingTextarea"
					></textarea>
					<label for="floatingTextarea" className="p-0" id="labelTextarea">
						Mensagem
					</label>
				</div>
				<button type="submit" class="btn btn-outline-light" id="contactBtn">
					Enviar
				</button>
			</div>
		</body>
	);
};

export default Contato;
