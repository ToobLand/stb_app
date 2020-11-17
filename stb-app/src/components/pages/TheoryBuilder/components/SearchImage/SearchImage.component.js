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
import axios from "axios";
import style from "./SearchImage.module.scss";

const SearchImage = ({ setImage }) => {
	const [open, setOpen] = React.useState(false);
	const [images, setImages] = useState("");
	const [value, setValue] = useState("");
	const [activeImage, setActiveImage] = useState("");
	const [urlToSave, setUrlToSave] = useState("");

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const selectHandler = (id, url) => {
		setActiveImage(id);
		setUrlToSave(url);
		handleClose();
	};

	const unsplash = async (term) => {
		let response = await axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization: "Client-ID pqeuVAv5rP7CM2EAr-MEBR5hEieK6xxHe4Ww0CSOEsg",
			},
		});

		setImages(response.data.results);
		return true;
	};

	const img_output = () => {
		if (images.length > 0) {
			let output = images.map((image, index) => {
				return (
					<div
						className={
							activeImage === image.id ? style.selectImage : style.unselectImage
						}
						onClick={() => selectHandler(image.id, image.urls.regular)}
						key={image.id}
					>
						<img src={image.urls.thumb} alt="" />
					</div>
				);
			});
			return output;
		} else {
			return "zoek in het engels";
		}
	};

	return (
		<div>
			<Button variant="contained" color="primary" onClick={handleClickOpen}>
				Kies foto
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">
					op unsplash zoeken naar foto
				</DialogTitle>
				<DialogContent>
					<div>
						<input
							className="inputStyle"
							type="text"
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						<br />
						<button onClick={() => unsplash(value)}>Zoek image</button>
					</div>
					<div>{img_output()}</div>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Annuleren
					</Button>
					<Button color="primary" onClick={() => setImage(urlToSave)}>
						selecteerde foto gebruiken
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
export default SearchImage;
