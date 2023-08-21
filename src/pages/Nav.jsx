import React from "react";
import "../styles.css";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
	return (
		<div className="navbar">
			{/* <div className="logo">Blog App</div> */}
			<ul className="nav-links">
				{/* <Link to="/">Post</Link>
				<Link to="/post-form">Add Post</Link> */}

				<NavLink to="/">
					{({ isActive, isPending }) => (
						<span className={isActive ? "active" : ""}>Posts</span>
					)}
				</NavLink>

				<NavLink to="/post-form">
					{({ isActive, isPending }) => (
						<span className={isActive ? "active" : ""}>Add Post</span>
					)}
				</NavLink>
			</ul>
		</div>
	);
}
