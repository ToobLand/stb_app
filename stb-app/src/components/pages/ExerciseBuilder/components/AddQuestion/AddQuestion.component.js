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

const AddQuestion = (props) => {
	const [open, setOpen] = React.useState(false);
	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");
	const dispatch = useDispatch();
	const [value, setValue] = React.useState("");
	const [text, setText] = React.useState("");
	const [answers, setAnswers] = React.useState([
		{ correct: 1, text: "Antwoord A" },
		{ correct: 0, text: "Antwoord B" },
	]);
	const [correctAnswer, setCorrectAnswer] = React.useState(0);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setTitle("");
		setDescription("");
		setOpen(false);
	};

	/*const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };*/
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	const handleChangeAnswer = (event) => {
		setCorrectAnswer(event.target.value);
		let arr = [...answers];
		arr.map((item, i) => {
			if (i == event.target.value) {
				arr[i].correct = 1;
			} else {
				arr[i].correct = 0;
			}
			return true;
		});
		setAnswers(arr);
		console.log(correctAnswer);
	};
	const handleSave = () => {
		alert(value);

		setOpen(false);
	};

	const editAnswer = (data, i) => {
		let arr = [...answers];
		arr[i].text = data;
		setAnswers(arr);
	};
	const addAnswer = (data) => {
		let arr = [...answers];
		arr.push({ correct: 0, text: data });
		setAnswers(arr);
	};
	const removeAnswer = (i) => {
		let arr = [...answers];
		arr.splice(i, 1);
		setAnswers(arr);
	};

	const renderAnswers = () => {
		let out = [];
		for (let i = 0; i < answers.length; i++) {
			out.push(
				<div>
					<div>
						<FormControlLabel
							value={i}
							control={<Radio color="primary" />}
							label="correct"
							labelPlacement="end"
							checked={answers[i].correct === 1 ? true : false}
						/>
					</div>
					<CKEditor
						editor={ClassicEditor}
						data={answers[i].text}
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
	const renderFormForQuestion = () => {
		let output = "";
		if (value == "1") {
			output = (
				<div>
					Vraag:
					<CKEditor
						editor={ClassicEditor}
						data={text}
						onInit={(editor) => {
							const data = editor.getData();
							setText(data);
						}}
						onChange={(event, editor) => {
							const data = editor.getData();
							setText(data);
						}}
					/>
					<br />
					Antwoorden:
					<RadioGroup
						aria-label="correct"
						name="correct"
						onChange={handleChangeAnswer}
						row
					>
						{renderAnswers()}
					</RadioGroup>
					<Button
						color="primary"
						onClick={() => {
							addAnswer("extra antwoord");
						}}
					>
						extra antwoordmogelijkheid
					</Button>
					{answers.length > 2 && (
						<Button
							color="primary"
							onClick={() => {
								removeAnswer(answers.length - 1);
							}}
						>
							delete antwoordmogelijkheid
						</Button>
					)}
				</div>
			);
		}
		return output;
	};
	return (
		<div>
			<SecButton style="special" clickAction={handleClickOpen}>
				Vraag toevoegen
			</SecButton>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
				component={"div"}
				fullScreen
			>
				<DialogTitle id="form-dialog-title">Nieuwe vraag</DialogTitle>
				<DialogContent component={"div"}>
					<DialogContentText>Welk type vraag?</DialogContentText>
					<RadioGroup
						aria-label="position"
						name="position"
						value={value}
						onChange={handleChange}
						row
					>
						<FormControlLabel
							value="1"
							control={<Radio color="primary" />}
							label="Meerkeuze"
							labelPlacement="end"
						/>
						<FormControlLabel
							value="2"
							control={<Radio color="primary" />}
							label="Invulvraag"
							labelPlacement="end"
						/>
						<FormControlLabel
							value="3"
							control={<Radio color="primary" />}
							label="Sleep antwoord"
							labelPlacement="end"
						/>
						<FormControlLabel
							value="4"
							control={<Radio color="primary" />}
							label="Tekst antwoord"
							labelPlacement="end"
						/>
					</RadioGroup>
					<DialogContentText component={"div"}>
						{renderFormForQuestion()}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Annuleren
					</Button>
					<Button onClick={handleSave} color="primary">
						Aanmaken
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
export default AddQuestion;
