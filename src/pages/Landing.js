import Navbar from "../components/navbar";
import Main from "../components/main";
import Footer from "../components/footer";

function Landing() {
	return (
		<body className="d-flex flex-column">
			<Navbar />
			<Main />
			<Footer/>
		</body>
	);
}

export default Landing;
