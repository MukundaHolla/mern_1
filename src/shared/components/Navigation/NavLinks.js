import React from "react";
import { NavLink, withRouter, useHistory } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = (props) => {
	let history = useHistory();
	const handleBack = () => {
		//debugger;
		props.history.listen((location) => {
			console.log(`You changed the page to: ${location.pathname}`);
		});
		//console.log(props.history);
		// if (props.history.location.pathname === '/') {
		// props.history.location.pathname === "/" ? (
		// 	<Redirect to="/" />
		// ) : (
		// 	props.history.goBack
		// );
		// }
	};
	return (
		<ul className="nav-links">
			<li>
				<NavLink to="/" exact>
					All Users
				</NavLink>
			</li>
			<li>
				<NavLink to="/u1/places">My Places</NavLink>
			</li>
			<li>
				<NavLink to="/places/new">Add Place</NavLink>
			</li>
			<li>
				<NavLink to="/auth">Authenticate</NavLink>
			</li>
			<li>
				<button onClick={props.history.goBack}>
					<a onClick={handleBack}>a</a>back
				</button>
			</li>
		</ul>
	);
};

export default withRouter(NavLinks);
