import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import { AddQuestionFillIn, AddQuestionMultipleChoice } from "../index";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import style from "./AddQuestion.module.scss";
import { FlashOnRounded } from "@material-ui/icons";
import * as actionCreators from "../../../../../state/question/actionCreators";

const AddQuestion = (props) => {
	const [open, setOpen] = React.useState(false);

	const dispatch = useDispatch();
	const [value, setValue] = React.useState("");
	const [questionText, setQuestionText] = React.useState("");
	const [answers, setAnswers] = React.useState([]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handlerQuestionText = (value) => {
		setQuestionText(value);
	};
	const handlerAnswers = (value) => {
		setAnswers(value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	/*const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };*/
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleSave = () => {
		alert(value);
		dispatch(
			actionCreators.saveNewQuestion(
				props.id_contentblock,
				value,
				questionText,
				answers
			)
		);
		//(id_contentblock, id_questionType, text, answers)
		setOpen(false);
	};

	const renderFormForQuestion = () => {
		let output = "";
		if (value == "1") {
			// multiple choice
			output = (
				<AddQuestionMultipleChoice
					setQuestion={handlerQuestionText}
					setAnswers={handlerAnswers}
				/>
			);
		}
		if (value == "2") {
			// FILL IN question
			output = (
				<AddQuestionFillIn
					setQuestion={handlerQuestionText}
					setAnswers={handlerAnswers}
				/>
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
				fullWidth={true}
				maxWidth={"md"}
			>
				<DialogTitle id="form-dialog-title">Nieuwe vraag</DialogTitle>
				<DialogContent component={"div"}>
					{value == "" && (
						<div className={style.typeSelection}>
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
						</div>
					)}
					<DialogContentText component={"div"}>
						<div className={style.addQuestionContainer}>
							{renderFormForQuestion()}
						</div>
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
