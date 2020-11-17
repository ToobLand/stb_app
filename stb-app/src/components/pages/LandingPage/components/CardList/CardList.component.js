import React, { useEffect } from "react";
//import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { MenuTop, MediaCard } from "../../../../layout";

import style from "../../LandingPage.module.scss";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const CardList = (props) => {
	let folders = <CircularProgress />;
	if (props.list.folders && props.list.folders.length > 0) {
		if (props.list.folders == "empty") {
			folders = <div className={style.card_container}></div>;
		} else {
			folders = (
				<div className={style.card_container}>
					{Object.values(props.list.folders).map((folder, index) => {
						return (
							<div className={style.cardWrapper} key={"keyFolder_" + index}>
								{index === 0 && props.movingState === 1 ? (
									<div className={style.emptySpaceBefore}>
										<AddCircleIcon />
									</div>
								) : (
									""
								)}
								{index === 0 && props.movingState === 0 ? (
									<div className={style.emptySpaceBeforeUnactive}></div>
								) : (
									""
								)}
								{props.movingState === 1 ? (
									<div className={style.overlayMove}>
										<AddCircleIcon />
									</div>
								) : (
									""
								)}
								<MediaCard
									title={folder.title}
									description={folder.description}
									id_folder={folder.id}
									linkUrl={`/folder/${folder.id}`}
									key={`folder_${folder.id}`}
									moving={props.setMoving}
									unsetmoving={props.unsetMoving}
									movingState={props.movingState}
									setMovingIdFolder={props.setMovingIdFolder}
									moving_id_folder={props.moving_id_folder}
								/>
								{props.movingState === 1 ? (
									<div className={style.emptySpaceAfter}>
										<AddCircleIcon />
									</div>
								) : (
									<div className={style.emptySpaceAfterUnactive}></div>
								)}
							</div>
						);
					})}
				</div>
			);
		}
	}
	let modules = <CircularProgress />;
	if (props.list.modules && props.list.modules.length > 0) {
		if (props.list.modules == "empty") {
			modules = <div className={style.card_container}></div>;
		} else {
			modules = (
				<div className={style.card_container}>
					{Object.values(props.list.modules).map((mod, index) => {
						return (
							<div className={style.cardWrapper} key={"key_" + index}>
								{index === 0 && props.movingState === 1 ? (
									<div className={style.emptySpaceBefore}>
										<AddCircleIcon />
									</div>
								) : (
									""
								)}
								{index === 0 && props.movingState === 0 ? (
									<div className={style.emptySpaceBeforeUnactive}></div>
								) : (
									""
								)}
								{props.movingState === 1 ? (
									<div className={style.overlayMove}>
										<AddCircleIcon />
									</div>
								) : (
									""
								)}
								<MediaCard
									title={mod.title}
									description={mod.description}
									id_folder={mod.id_folder}
									id_module={mod.id}
									linkUrl={`/module/${mod.id}`}
									key={`module_${mod.id}`}
									moving={props.setMoving}
									unsetmoving={props.unsetMoving}
									movingState={props.movingState}
									setMovingIdFolder={props.setMovingIdFolder}
									moving_id_folder={props.moving_id_folder}
								/>
								{props.movingState === 1 ? (
									<div className={style.emptySpaceAfter}>
										<AddCircleIcon />
									</div>
								) : (
									<div className={style.emptySpaceAfterUnactive}></div>
								)}
							</div>
						);
					})}
				</div>
			);
		}
	}
	return (
		<div className="cardlist_container">
			{folders}
			{modules}
		</div>
	);
};

/*LandingPage.propTypes = {
getContent: PropTypes.func.isRequired,
subjectContent: PropTypes.shape({
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  groups: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  latestEdition: PropTypes.string.isRequired,
  theory: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}).isRequired,
};*/

export default CardList;
