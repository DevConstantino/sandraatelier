import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

function Navbar() {
	return (
		<header>
			<nav className={`navbar`}>
				<div className="container-fluid">
					<a className={`navbar-brand mx-auto order-2`} href="#">
						<p className="d-block m-0">Sandra</p>
						<p className="m-0" id="sub-title">
							Atelier
						</p>
					</a>
					<button
						className="btn btn-primary"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasTop"
						aria-controls="offcanvasTop"
					>
						Ham
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
								className="btn-close text-reset"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<div className="offcanvas-body pt-0">
							<ul className={`nav flex-column`}>
								<li className="nav-item mx-auto">
									<a className="nav-link my-3" href="">
										Home
									</a>
								</li>
								<li className="nav-item mx-auto">
									<a className="nav-link my-3" href="">
										About
									</a>
								</li>
								<li className="nav-item mx-auto">
									<a className="nav-link my-3" href="">
										Contato
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
