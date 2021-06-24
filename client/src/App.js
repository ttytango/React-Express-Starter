import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const [testData, setTestData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// setIsLoading(true);
		fetch("http://localhost:9000/test").then((response) =>
			response
				.json()
				.then((data) => {
					setTestData(data);
					setIsLoading(false);
					// console.log(testData);
				})
				.catch((error) => error)
		);
	}, []);

	if (isLoading) {
		return (
			<div>
				<h2>Loading...</h2>
			</div>
		);
	} else {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>{testData.message}</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer">
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
