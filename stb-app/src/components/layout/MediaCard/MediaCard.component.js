import styleCustom from "./MediaCard.module.scss";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
/*import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';*/
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import classnames from "classnames";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import AssignmentIcon from "@material-ui/icons/Assignment";

const MediaCard = (props) => {
	//const classes = useStyles();

	const clickHandlerLink = (e) => {
		if (props.movingState === 1) {
			e.preventDefault();
		} else {
			// doe je ding
		}
	};
	const clickHandlerMoving = () => {
		if (props.movingState === 1) {
			props.unsetmoving();
			props.setMovingIdFolder(0);
		} else {
			props.moving();
			props.setMovingIdFolder(props.id_folder);
		}
	};

	const checkClassname = () => {
		if (props.moving_id_folder === props.id_folder) {
			return styleCustom.movingState;
		} else {
			if (props.movingState === 1) {
				return styleCustom.movingDropzone;
			} else {
				return true;
			}
		}
	};
	return (
		<div
			className={classnames(styleCustom.card, checkClassname())}
			onClick={props.onClick}
		>
			<Link
				key={`folderClick_${props.id_folder}`}
				to={`${props.linkUrl}`}
				onClick={(e) => {
					clickHandlerLink(e);
				}}
				className={styleCustom.linkArea}
			>
				<div>
					<h2>{props.title}</h2>

					{props.id_module ? (
						<div className={styleCustom.iconCircleModule}>
							<AssignmentIcon fontSize="large" />
						</div>
					) : (
						<div className={styleCustom.iconCircleFolder}>
							<FolderOpenIcon fontSize="large" />
						</div>
					)}

					<p variant="body2" component="p">
						{props.description}
					</p>
				</div>
			</Link>
			<div>
				<Button
					size="small"
					color="primary"
					onClick={() => clickHandlerMoving()}
				>
					<SwapHorizIcon />
				</Button>
				<Button size="small" color="primary">
					<DeleteForeverIcon />
				</Button>
			</div>
		</div>
	);
};
export default MediaCard;
