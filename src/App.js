import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./pages/Edit";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Error from "./pages/Error";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./scss/main.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/edit" element={<Edit />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
