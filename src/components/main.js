import Sidebar from "../components/sidebar";

function Main() {
	return (
		<main className="w-100 h-100 d-flex">
			<section className="order-1"></section>
			<section className="order-2 ms-auto sidebar pt-3">
				<Sidebar />
			</section>
		</main>
	);
}

export default Main;
