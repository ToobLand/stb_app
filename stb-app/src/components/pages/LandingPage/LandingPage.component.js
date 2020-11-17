import React, { useEffect } from "react";
//import PropTypes from 'prop-types';
import { MenuTop, SecMenu } from "../../layout";
import { CardList } from "./components";
import { NewFolder, NewModule } from "./components/index.js";
import style from "./LandingPage.module.scss";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const LandingPage = (props) => {
	useEffect(() => {
		if (props.match.params.id_folder !== props.id_folder) {
			if (!props.match.params.id_folder) {
				props.match.params.id_folder = 0;
			}
			props.getList(props.match.params.id_folder);
			props.getById(props.match.params.id_folder);
			props.setFolderId("" + props.match.params.id_folder + "");
		}
	}, [props.match.params.id_folder]);

	const go_back = () => {
		props.history.goBack();
	};

	return (
		<div className="container">
			<MenuTop />
			<SecMenu history={props.history}>
				<NewFolder
					content="Maak een nieuwe folder aan."
					buttonText="Nieuwe folder"
					id_folder={props.id_folder}
				/>
				<NewModule
					content="Maak een nieuwe module aan."
					buttonText="Nieuwe module"
					id_folder={props.id_folder}
				/>
			</SecMenu>
			<div className={style.landing_container}>
				<CardList list={props.list} />
			</div>
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

export default LandingPage;
