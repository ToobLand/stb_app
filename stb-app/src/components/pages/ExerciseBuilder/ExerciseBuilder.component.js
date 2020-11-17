import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Unsplash, { toJson } from "unsplash-js";
import { AddQuestion } from "./components/index";
import Button from "@material-ui/core/Button";
import style from "./ExerciseBuilder.module.scss";
import { MenuTop, SecMenu } from "../../layout";
import SecButton from "../../layout/SecMenu/components/SecButton/SecButton.component";
import DOMPurify from "dompurify";
const validator = require("validator");

const ExerciseBuilder = (props) => {
	const [image, setImage] = useState("");
	const [design, setDesign] = useState("");
	const [text, setText] = useState("");
	const [id_contentblock, setId_contentblock] = useState(0);
	const [StateIsSetOnce, setStateIsSetOnce] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setId_contentblock(props.match.params.id_contentblock);
	}, [props.match.params.id_contentblock]);

	const handleSave = () => {};

	const loadExercise = async () => {
		setLoading(false);
	};
	const updateDesign = (value) => {
		setDesign(value);
	};
	///// MARK UP JSX, ADD BUTTONS STEP BY STEP
	let html_content = "dit is Html";

	if (loading) {
	} else {
	}

	return (
		<div className="container">
			<MenuTop />
			<SecMenu history={props.history}>
				<AddQuestion />
			</SecMenu>

			<div>{html_content}</div>
		</div>
	);
};

export default ExerciseBuilder;
