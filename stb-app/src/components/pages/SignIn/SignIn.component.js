import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import customStyle from "./SignIn.module.scss";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../../../state/auth/actionCreators";
import CircularProgress from "@material-ui/core/CircularProgress";
function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Studiebeest
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
const arr_images = [
	"Mv9hjnEUHR4",
	"Pg6dgmTaqtM",
	"3YnT86K0CdE",
	"IY9bfJAM2zM",
	"e3irr6H7e5s",
];
const random = Math.floor(Math.random() * arr_images.length);

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	image: {
		backgroundImage:
			"url(https://source.unsplash.com/" + arr_images[random] + "/)",
		backgroundRepeat: "no-repeat",
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignInSide() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [emailErrorText, setEmailErrorText] = React.useState("");
	const [passwordErrorText, setPasswordErrorText] = React.useState("");
	const errorText = useSelector((state) => state.auth.error);
	const loading = useSelector((state) => state.auth.loading);
	const token = useSelector((state) => state.auth.token);
	console.log(errorText);
	const handleSave = (e) => {
		e.preventDefault();
		if (!email) {
			setEmailErrorText("Er is geen e-mailadres ingevuld.");
			return false;
		} else {
			if (validator.isEmail(email)) {
				setEmailErrorText("");
			} else {
				setEmailErrorText("Geen geldig e-mailadres.");
				return false;
			}
		}

		if (!password) {
			setPasswordErrorText("Er is geen wachtwoord ingevuld.");
			return false;
		} else {
			setPasswordErrorText("");
		}

		dispatch(
			actionCreators.auth({
				payload: {
					email: email,
					password: password,
				},
			})
		);
	};
	if (token) {
		window.location.href = "/";
	}

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<img src="/assets/img/icon.png" width="120px"></img>
					<br />
					<form className={classes.form} noValidate>
						<TextField
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="E-mail"
							name="email"
							autoComplete="email"
							error={!!emailErrorText}
							helperText={emailErrorText}
							autoFocus
						/>
						<TextField
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Wachtwoord"
							type="password"
							id="password"
							autoComplete="current-password"
							error={!!passwordErrorText}
							helperText={passwordErrorText}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Laat me extra lang ingelogd"
						/>
						<Button
							onClick={handleSave}
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							{loading ? <CircularProgress /> : "Inloggen op studiebeest"}
						</Button>
						{errorText != "" ? errorText : ""}
						<Grid container>
							<Grid item xs style={{ textAlign: "left" }}>
								<Link href="#" variant="body2">
									Wachtwoord vergeten?
								</Link>
							</Grid>
							<Grid item>
								<Link href="/signup/" variant="body2">
									{"Nog geen account? Registreer hier"}
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
