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

const AddQuestionFillIn = (props) => {
	const [CKeditor, setCKeditor] = React.useState(false);
	const [FillInCounter, setFillInCounter] = React.useState(0);
	const [FillInArray, setFillInArray] = React.useState([]);
	const [text, setText] = React.useState("");
	const clickFillInField = () => {
		CKeditor.model.change((writer) => {
			writer.insertText(
				" [-" + (FillInCounter + 1) + "-] ",
				CKeditor.model.document.selection.getFirstPosition()
			);
		});
		setFillInCounter(FillInCounter + 1);
		let arrayCopy = [...FillInArray];
		arrayCopy.push({ text: "empty", key: FillInCounter + 1 });
		setFillInArray(arrayCopy);
		console.log(FillInArray);
	};

	const renderAnswersFillIn = () => {
		let out = [];
		for (let i = 0; i < FillInArray.length; i++) {
			out.push(
				<div>
					<TextField
						onChange={(event) => {
							let copyArray = [...FillInArray];
							copyArray[i].text = event.target.value;
							setFillInArray(copyArray);
						}}
						variant="outlined"
						fullWidth
						id="middleName"
						label={`Antwoord voor [-${FillInArray[i].key}-] :`}
						name="middleName"
						autoComplete="mname"
					/>
				</div>
			);
		}
		return out;
	};

	let output;

	return (
		<div>
			Vraag:
			<CKEditor
				editor={ClassicEditor}
				data={text}
				onInit={(editor) => {
					setCKeditor(editor);
					const data = editor.getData();
					setText(data);
				}}
				onChange={(event, editor) => {
					let stopChange = false;
					const data = editor.getData();
					for (let i = 0; i < FillInArray.length; i++) {
						const countOccurence =
							data.split("[-" + FillInArray[i].key + "-]").length - 1;
						if (countOccurence !== 1) {
							if (countOccurence < 1) {
								alert(
									"Oeps je wilt een invulveld weg halen. Klik daarvoor op de delete knop bij het antwoord."
								);
							}
							if (countOccurence > 1) {
								alert(
									"Oeps, je voegt al bestaand invulveld toe. Een invulveld moet uniek zijn. Klik op 'antwoord toevoegen' voor nog een invulveld."
								);
							}
							editor.setData(text);
							stopChange = true;
							break;
						}
					}
					if (!stopChange) {
						setText(data);
					}
				}}
			/>
			<Button
				variant="contained"
				color="primary"
				onClick={() => {
					clickFillInField();
				}}
			>
				Invulveld toevoegen op plek cursor
			</Button>
			{renderAnswersFillIn()}
		</div>
	);
};
export default AddQuestionFillIn;
