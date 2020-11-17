import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../../../../../state/module/actionCreators";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const ModuleOptions = (props) => {
	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");
	const id_folder = props.id_folder;
	const dispatch = useDispatch();
	const [value, setValue] = React.useState("0");

	/*const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };*/
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	const handleSave = () => {
		dispatch(
			actionCreators.saveContentblock({
				payload: {
					type: "test",
				},
			})
		);
	};
	return (
		<div>
			<h2>Instellingen</h2>
			<h3>Voorkeur weergave:</h3>

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
					label="Horizontale navigatie. Als een diavoorstelling"
					labelPlacement="end"
				/>
				<FormControlLabel
					value="2"
					control={<Radio color="primary" />}
					label="Verticale navigatie. Als een 'scrollpagina'. "
					labelPlacement="end"
				/>
			</RadioGroup>
		</div>
	);
};
export default ModuleOptions;
