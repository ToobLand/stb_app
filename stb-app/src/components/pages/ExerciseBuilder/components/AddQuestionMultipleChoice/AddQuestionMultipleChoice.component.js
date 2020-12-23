import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../../../../../state/module/actionCreators";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import SecButton from "../../../../layout/SecMenu/components/SecButton/SecButton.component";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import style from "../AddQuestion/AddQuestion.module.scss";
import "./alterCkeditor.css";

const AddQuestionMultipleChoice = (props) => {
	const [text, setText] = React.useState("");
	const [answers, setAnswers] = React.useState([
		{ result: 1, text: "Antwoord A" },
		{ result: 0, text: "Antwoord B" },
	]);
	const [correctAnswer, setCorrectAnswer] = React.useState(0);
	const [CKeditor, setCKeditor] = React.useState(false);

	const handleChangeAnswer = (event) => {
		setCorrectAnswer(event.target.value);
		let arr = [...answers];
		arr.map((item, i) => {
			if (i == event.target.value) {
				arr[i].result = 1;
			} else {
				arr[i].result = 0;
			}
			return true;
		});
		setAnswers(arr);
		props.setAnswers(arr);
		console.log(correctAnswer);
	};
	const editAnswer = (data, i) => {
		let arr = [...answers];
		arr[i].text = data;
		setAnswers(arr);
		props.setAnswers(arr);
	};
	const addAnswer = (data) => {
		let arr = [...answers];
		arr.push({ result: 0, text: data });
		setAnswers(arr);
		props.setAnswers(arr);
	};
	const removeAnswer = (i) => {
		let arr = [...answers];
		arr.splice(i, 1);
		setAnswers(arr);
		props.setAnswers(arr);
	};

	const renderAnswers = () => {
		let out = [];
		for (let i = 0; i < answers.length; i++) {
			out.push(
				<div className={style.MultipleChoiceAnswer}>
					<div>
						<FormControlLabel
							value={i}
							control={<Radio color="primary" />}
							label="correct"
							labelPlacement="end"
							checked={answers[i].result === 1 ? true : false}
						/>
					</div>
					<CKEditor
						style={{ width: "100%" }}
						editor={ClassicEditor}
						data={answers[i].text}
						config={{ width: "100%", height: "400" }}
						onInit={(editor) => {
							const data = editor.getData();
							editAnswer(data, i);
						}}
						onChange={(event, editor) => {
							const data = editor.getData();
							editAnswer(data, i);
						}}
					/>
				</div>
			);
		}
		return out;
	};

	return (
		<div>
			<div className={style.MultipleChoiceText}>
				<h4>Vraagstelling:</h4>
				<br />
				<CKEditor
					editor={ClassicEditor}
					data={text}
					onInit={(editor) => {
						const data = editor.getData();
						setText(data);
						props.setQuestion(data);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						props.setQuestion(data);
					}}
				/>
			</div>
			<div className={style.MultipleChoiceAnswerContainer}>
				<h4>Antwoorden:</h4>
				<RadioGroup
					aria-label="correct"
					name="correct"
					onChange={handleChangeAnswer}
					row
				>
					{renderAnswers()}
				</RadioGroup>
				<Button
					variant="contained"
					color="primary"
					color="primary"
					onClick={() => {
						addAnswer("extra antwoord");
					}}
				>
					extra antwoordmogelijkheid
				</Button>
				{answers.length > 2 && (
					<Button
						variant="contained"
						color="primary"
						color="primary"
						onClick={() => {
							removeAnswer(answers.length - 1);
						}}
					>
						delete antwoordmogelijkheid
					</Button>
				)}
			</div>
		</div>
	);
};
export default AddQuestionMultipleChoice;
