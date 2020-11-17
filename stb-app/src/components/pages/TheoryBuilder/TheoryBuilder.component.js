import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Unsplash, { toJson } from "unsplash-js";
import { SearchImage, PickDesign } from "./components/index";
import Button from "@material-ui/core/Button";
import style from "./TheoryBuilder.module.scss";
import { MenuTop, SecMenu } from "../../layout";
import SecButton from "../../layout/SecMenu/components/SecButton/SecButton.component";
import DOMPurify from "dompurify";
const validator = require("validator");

const TheoryBuilder = (props) => {
	const [image, setImage] = useState("");
	const [design, setDesign] = useState("");
	const [text, setText] = useState("");
	const [id_contentblock, setId_contentblock] = useState(0);
	const [StateIsSetOnce, setStateIsSetOnce] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setId_contentblock(props.match.params.id_contentblock);

		if (props.theory.id_contentblock != props.match.params.id_contentblock) {
			setDesign(0);
			setText("");
			setImage("");
			setStateIsSetOnce(false);
			setLoading(true);
			loadTheory(props.match.params.id_contentblock);
		}
	}, [props.match.params.id_contentblock]);

	const handleSave = () => {
		let obj_theory = { image: image, text: text };
		let title_contentblock = text.substring(0, 240);
		let jsonText = JSON.stringify(obj_theory);
		if (parseInt(props.theory.id) > 0) {
			props.updateTheory(props.theory.id, design, jsonText);
			props.updateContentblockTitle(id_contentblock, title_contentblock);
		} else {
			props.saveTheory(id_contentblock, design, jsonText);
			props.updateContentblockTitle(id_contentblock, title_contentblock);
		}
	};

	const loadTheory = async () => {
		let result = await props.getTheory(props.match.params.id_contentblock);
		setLoading(false);
	};
	const updateDesign = (value) => {
		setDesign(value);
	};
	///// MARK UP JSX, ADD BUTTONS STEP BY STEP

	let html_content = "";
	let html_design = "";

	if (props.theory.id_contentblock == id_contentblock || !loading) {
		if (!StateIsSetOnce) {
			if (props.theory.id > 0) {
				setDesign(props.theory.id_theorytemplate);
				let text = JSON.parse(validator.unescape(props.theory.text));
				setText(DOMPurify.sanitize(text.text));
				setImage(DOMPurify.sanitize(text.image));
				setStateIsSetOnce(true);
			} else {
				html_content = (
					<div className={style.contentWrapper}>pick a design first.</div>
				);
			}
		}
	} else {
		html_content = <div className={style.contentWrapper}>Loading...</div>;
	}

	if (loading) {
	} else {
		if (design == "1") {
			html_content = (
				<div className={style.contentWrapper}>
					<div className={style.textFull}>
						<CKEditor
							editor={ClassicEditor}
							data={text}
							onInit={(editor) => {
								const data = editor.getData();
								setText(data);
								editor.editing.view.change((writer) => {
									writer.setStyle(
										"height",
										"80vh",
										editor.editing.view.document.getRoot()
									);
									writer.setStyle(
										"width",
										"100%",
										editor.editing.view.document.getRoot()
									);
								});
							}}
							onChange={(event, editor) => {
								const data = editor.getData();
								setText(data);
							}}
						/>
					</div>
				</div>
			);
		}
		if (design == "2") {
			html_content = (
				<div className={style.contentWrapper}>
					<div
						style={{ backgroundImage: `url(${image})` }}
						className={style.imageLeft}
					>
						<SearchImage setImage={setImage} />
					</div>
					<div className={style.textRight}>
						<CKEditor
							editor={ClassicEditor}
							data={text}
							onInit={(editor) => {
								const data = editor.getData();
								setText(data);
								editor.editing.view.change((writer) => {
									writer.setStyle(
										"height",
										"80vh",
										editor.editing.view.document.getRoot()
									);
									writer.setStyle(
										"width",
										"100%",
										editor.editing.view.document.getRoot()
									);
								});
							}}
							onChange={(event, editor) => {
								const data = editor.getData();
								setText(data);
							}}
						/>
					</div>
				</div>
			);
		}
		if (design == "3") {
			html_content = (
				<div className={style.contentWrapper}>
					<div
						style={{ backgroundImage: `url(${image})` }}
						className={style.imageFull}
					>
						<SearchImage setImage={setImage} />

						<div className={style.textOverlay}>
							<CKEditor
								editor={ClassicEditor}
								data={text}
								onInit={(editor) => {
									const data = editor.getData();
									setText(data);
									editor.editing.view.change((writer) => {
										writer.setStyle(
											"height",
											"40vh",
											editor.editing.view.document.getRoot()
										);
										writer.setStyle(
											"width",
											"100%",
											editor.editing.view.document.getRoot()
										);
									});
								}}
								onChange={(event, editor) => {
									const data = editor.getData();
									setText(data);
								}}
							/>
						</div>
					</div>
				</div>
			);
		}
	}

	return (
		<div className="container">
			<MenuTop />
			<SecMenu history={props.history}>
				<PickDesign setDesign={(value) => updateDesign(value)} />
				<SecButton style="special" clickAction={() => handleSave()}>
					Save
				</SecButton>
			</SecMenu>

			<div className="contentblocklist_container">
				{design}
				{html_design}
				{html_content}
			</div>
		</div>
	);
};

export default TheoryBuilder;
