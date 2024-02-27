import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
	return (
		<>
			<MainNavigation />
			<main classes={classes.main}>{props.children}</main>
		</>
	);
}

export default Layout;
