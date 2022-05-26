import React, { useState } from "react";
import Emoji from "../Emoji/Emoji";
import emojis from "../../emojisData/data.json";
import classes from "./EmojiContainer.module.css";

const EmojiContainer = () => {
	const [inputValue, setInputValue] = useState("");
	const [data, setData] = useState(emojis);

	return (
		<>
			<div className={classes.inputContainer}>
				<input
					type="text"
					className={classes.input}
					placeholder="Search Emoji..."
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
			</div>
			<div className={classes.emojiContainer}>
				{data
					.filter(
						(emoji) =>
							emoji.keywords.toLowerCase().includes(inputValue.toLowerCase()) ||
							emoji.title.toLowerCase().includes(inputValue.toLowerCase())
					)
					.map((emoji) => (
						<Emoji symbol={emoji.symbol} title={emoji.title} />
					))}
			</div>
		</>
	);
};

export default EmojiContainer;
