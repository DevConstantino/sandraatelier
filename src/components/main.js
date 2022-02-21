import Sidebar from "../components/sidebar";

function Main() {
	return (
		<main className="w-100 h-100 d-flex">
			<section className="h-100 w-75"></section>
			<section className="h-100 w-25">
				<Sidebar />
			</section>
		</main>
	);
}

export default Main;
