import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import CreatePost from "./components/CreatePost";
import Featured from "./components/Featured";
import Layout from "./navigation/Layout";

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact={true}>
					<HomePage />
				</Route>
				<Route path="/create-post">
					<CreatePost />
				</Route>
				<Route path="/featured">
					<Featured />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
