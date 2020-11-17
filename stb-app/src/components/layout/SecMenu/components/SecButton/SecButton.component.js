import React from "react";
import style from "./SecButton.module.scss";

const SecButton = (props) => {
	let xtra_class = `${style.sec_button}`;

	if (props.style == "dark") {
		xtra_class = `${style.sec_button} ${style.dark}`;
	}
	if (props.style == "special") {
		xtra_class = `${style.sec_button} ${style.special}`;
	}
	return (
		<div className={xtra_class} onClick={props.clickAction}>
			{props.children}
		</div>
	);
};
export default SecButton;
