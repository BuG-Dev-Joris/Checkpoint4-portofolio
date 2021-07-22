import "./App.css";
// import './tailwind.out.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { ToastProvider } from "react-toast-notifications";

export default function App() {
	return (
		<Router>
			<ToastProvider
				placement="bottom-right"
				autoDismissTimeout="4000"
				autoDismiss="true"
			>
				<Navbar />
				<Main />
				<Footer />
			</ToastProvider>
		</Router>
	);
}
