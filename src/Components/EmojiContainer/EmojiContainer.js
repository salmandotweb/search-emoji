import React from "react";
import Emoji from "../Emoji/Emoji";
import data from "../../emojisData/data.json";
import classes from "./EmojiContainer.module.css";

const EmojiContainer = () => {
	return (
		<div className={classes.emojiContainer}>
			{data.map((emoji) => (
				<Emoji symbol={emoji.symbol} title={emoji.title} />
			))}
		</div>
	);
};

export default EmojiContainer;
