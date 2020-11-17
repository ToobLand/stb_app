import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import style from "./PickDesign.module.scss";
import SecButton from "../../../../layout/SecMenu/components/SecButton/SecButton.component";

const PickDesign = ({ setDesign }) => {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = useState(0);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	const handleSetDesign = (value) => {
		setDesign(value);
		console.log("set design" + value);
		handleClose();
	};
	return (
		<div>
			<SecButton style="dark" clickAction={handleClickOpen}>
				Kies design
			</SecButton>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">welk design</DialogTitle>
				<DialogContent>
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
							label="only text"
							labelPlacement="end"
						/>
						<FormControlLabel
							value="2"
							control={<Radio color="primary" />}
							label="picture left and text right"
							labelPlacement="end"
						/>
						<FormControlLabel
							value="3"
							control={<Radio color="primary" />}
							label="text over full picture"
							labelPlacement="end"
						/>
						<FormControlLabel
							value="4"
							control={<Radio color="primary" />}
							label="title over picture"
							labelPlacement="end"
						/>
					</RadioGroup>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Annuleren
					</Button>
					<Button color="primary" onClick={() => handleSetDesign(value)}>
						Kies design
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
export default PickDesign;
