import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

function Navbar() {
	return (
		<header>
			<nav className={`navbar`}>
				<div className="container-fluid">
					<a className={`navbar-brand mx-auto order-2`} href="#">
						<img
							src=""
							alt=""
							width="30"
							height="24"
							className={`align-text-top d-none`}
						></img>
                        <p className="d-block m-0">Sandra</p>
                        <p className="m-0" id="sub-title">Atelier</p>
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
							<h5 id="offcanvasTopLabel">myReactStrap</h5>
							<button
								type="button"
								className="btn-close text-reset"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<div className="offcanvas-body pt-0">
							<ul className={`nav flex-column`}>
								<li className="nav-item">
									<a className="nav-link" href="">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="">
										About
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="">
										etc..
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
