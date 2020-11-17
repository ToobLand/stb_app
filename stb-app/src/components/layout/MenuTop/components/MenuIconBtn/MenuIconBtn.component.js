import React from "react";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import style from "./MenuIconBtn.module.scss";
import PropTypes from "prop-types";

const MenuIconBtn = ({ Text }) => {
	return <div className={style.btn_menu}>{Text}</div>;
};
export default MenuIconBtn;
