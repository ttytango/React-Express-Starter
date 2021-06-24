import { Link } from "react-router-dom";
import styles from "./Main-Navigation.module.scss";

function MainNavigation() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>React-Client Express-Server</div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/create-post">Add New Post</Link>
					</li>
					<li>
						<Link to="/featured">
							Featured
							<span className={styles.badge}></span>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
