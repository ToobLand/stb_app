import React, { useEffect } from "react";
import { MenuTop, SecMenu } from "../../layout";
import {
	NewContentblock,
	ContentblockList,
	ModuleOptions,
} from "./components/index";
import style from "./ModuleBuilder.module.scss";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const ModuleBuilder = (props) => {
	useEffect(() => {
		console.log(props.match.params.id_module);
		console.log(props.currentModule);

		if (props.currentModule.id != props.match.params.id_module) {
			props.getModule(props.match.params.id_module);
			props.getContentblocks(props.match.params.id_module);
		}
	}, [props.match.params.id_module]);

	return (
		<div className={style.container}>
			<MenuTop />
			<SecMenu history={props.history}>
				<NewContentblock currentModule={props.currentModule} />
			</SecMenu>

			<h1>{props.currentModule.title}</h1>
			<div className={style.moduleContainer}>
				<div className={style.moduleOptions}>
					<ModuleOptions />
				</div>
				<div className={style.contentblockContainer}>
					<ContentblockList contentblocks={props.contentblocks} />
				</div>
			</div>
		</div>
	);
};

export default ModuleBuilder;
