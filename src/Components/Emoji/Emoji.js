import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classes from "./Emoji.module.css";

const Emoji = ({ symbol, title }) => {
	const [copied, setCopied] = useState(false);

	setTimeout(() => {
		setCopied(false);
	}, 2000);

	return (
		<>
			<CopyToClipboard text={symbol} onCopy={() => setCopied(true)}>
				<div
					className={
						copied ? `${classes.copied} ${classes.emoji}` : classes.emoji
					}>
					<p className={classes.symbol}>{symbol}</p>
					<p className={classes.title}>{title}</p>
				</div>
			</CopyToClipboard>
			{copied && <p className={classes.copiedEmoji}>Copied!</p>}
		</>
	);
};

export default Emoji;
