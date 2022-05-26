import React from "react";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<div className={classes.header}>
			<h1>Emojitics</h1>
			<p>A React based tool for searching your favourite emoji!</p>
		</div>
	);
};

export default Header;
