import React, { useEffect } from "react";
//import PropTypes from 'prop-types';

import style from "./SecMenu.module.scss";
import SecButton from "./components/SecButton/SecButton.component";
import Button from "@material-ui/core/Button";

const SecMenu = (props) => {
	const go_back = () => {
		props.history.goBack();
	};

	return (
		<div className={style.container}>
			<div className={style.secContainer}>
				<div>
					<SecButton color="primary" clickAction={() => go_back()}>
						terug
					</SecButton>
				</div>
				{props.children}
			</div>
		</div>
	);
};

export default SecMenu;
