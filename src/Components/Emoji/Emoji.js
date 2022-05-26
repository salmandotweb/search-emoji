import React from "react";
import classes from "./Emoji.module.css";

const Emoji = ({ symbol, title }) => {
	return (
		<div className={classes.emoji}>
			<p className={classes.symbol}>{symbol}</p>
			<p className={classes.title}>{title}</p>
		</div>
	);
};

export default Emoji;
