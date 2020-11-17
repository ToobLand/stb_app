import React, { useContext } from "react";
import MenuIconBtn from "./components/MenuIconBtn/MenuIconBtn.component";
import styleCustom from "./MenuTop.module.scss";

const MenuTop = () => {
	return (
		<div className={styleCustom.menuBar}>
			<div className={styleCustom.menuContainer}>
				<div className={styleCustom.logo_container}>.studiebeest</div>
				<div className={styleCustom.btn_container}>
					<MenuIconBtn Text="Content bibliotheek" />
					<MenuIconBtn Text="Content inzetten" />
					<MenuIconBtn Text="Voortgang en gebruik" />
				</div>
			</div>
		</div>
	);
};

export default MenuTop;
