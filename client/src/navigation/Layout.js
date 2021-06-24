import MainNavigation from "./Main-Navigation";
import styles from "./Layout.module.scss";
function Layout(props) {
	return (
		<div>
			<MainNavigation /> <main className={styles.main}>{props.children}</main>
		</div>
	);
}
export default Layout;
