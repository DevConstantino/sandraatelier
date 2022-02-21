import { Link } from "react-router-dom";

function Navbar() {
	return (
		<header>
			<nav className={`navbar`}>
				<div className="container-fluid">
					<Link className={`navbar-brand mx-auto order-2`} to='/'>
						<p className="d-block m-0">Sandra</p>
						<p className="m-0" id="sub-title">
							Atelier
						</p>
					</Link>
					<button
						className="btn pb-2"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasTop"
						aria-controls="offcanvasTop"
					>
						<span className="hamburguer"></span>
					</button>
					<div
						className={`offcanvas offcanvas-start`}
						tabIndex="-1"
						id="offcanvasTop"
						aria-labelledby="offcanvasTopLabel"
					>
						<div className="offcanvas-header">
							<p className="mx-auto ps-4" id="offcanvasTopLabel">
								Sandra
							</p>
							<button
								type="button"
								className="btn-close text-reset mb-1"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<div className="offcanvas-body pt-0">
							<ul className={`nav flex-column`}>
								<li className="nav-item mx-auto">
									<a className="nav-link my-3" href="">
										<div className="hover001">
											<p id="hover001">Home</p>
										</div>
									</a>
								</li>
								<li className="nav-item mx-auto">
									<a className="nav-link my-3" href="">
										<div className="hover001">
											<p id="hover001">Sobre</p>
										</div>
									</a>
								</li>
								<li className="nav-item mx-auto">
									<a className="nav-link my-3" href="">
										<div className="hover001">
											<p id="hover001">Contato</p>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
