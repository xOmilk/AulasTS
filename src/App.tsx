import "./css/App.css";
import { Navbar } from "./components/Navbar";
import { MainRoute } from "./routes/MainRoute";
import { LeitorPDF } from "./pages/PdfReaderPage";

export function App() {
	return (
		<>
			{/* <MainRoute /> */}
			<LeitorPDF />
		</>
	);
}
