import React, { useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
	const [inputValue, setInputValue] = useState("");
	console.log(inputValue);
	return (
		<div className={classes.header}>
			<h1>Emojitics</h1>
			<p>A React based tool for searching your favourite emoji!</p>
			<input
				type="text"
				className={classes.input}
				placeholder="Search Emoji..."
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
		</div>
	);
};

export default Header;
