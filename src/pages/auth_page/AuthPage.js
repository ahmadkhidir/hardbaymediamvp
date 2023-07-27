import styles from "./AuthPage.module.scss"
import Layout from "../../components/layout/Layout"
import Appbar from "../../components/appbar/Appbar"
import { LinkButton, Button } from "../../components/button/Button"
import { SlideFadeAnimation } from "../../components/animation/Animation"
import img1 from "./assets/bg2.png";
import { Link, Navigate, Outlet, useNavigate, useSearchParams } from "react-router-dom"
import { InputField } from "../../components/field/Field"
import { Fragment, useEffect, useState } from "react"
import { handleValidations, validatePaswdMatch, validateRequired } from "../../utilities/validator"
import { useDispatch, useSelector } from "react-redux"
import { loginUserThunk, registerUserThunk, statusToIdle, verifyUserThunk } from "../../redux/slices/authSlice"
import { Status } from "../../utilities/helper"
import { Alert, AlertTitle, Button as ButtonMaterial, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, ThemeProvider, createTheme } from "@mui/material"


export default function AuthRoot(props) {
	const [isFailedModal, setIsFailedModal] = useState(false)
	const auth = useSelector((state) => state.auth)
	const dispatch = useDispatch()


	useEffect(() => {
		if (auth.status == Status.failed) {
			// Set Status Back to Idle
			dispatch(statusToIdle())
			// Display Failed Modal
			setIsFailedModal(true)
		}
		if (auth.status == Status.success) {
			// Set Status Back to Idle
			// Individual handling of success response.
			dispatch(statusToIdle())
		}
	}, [auth])
	return (

		<Fragment>
			{/* Display Loading Modal */}
			<Snackbar open={auth.status == Status.pending} autoHideDuration={null}>
				<Alert severity="info" sx={{ width: '100%' }}>
					This page is loading
				</Alert>
			</Snackbar>
			{/* Display Failed Modal */}
			<Dialog
				open={isFailedModal}
				onClose={() => false}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					Authentication Error
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{auth.statusMessage}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<ButtonMaterial onClick={() => setIsFailedModal(false)} autoFocus>Close</ButtonMaterial>
				</DialogActions>
			</Dialog>
			{/* Outlet for every other Auth Pages */}
			<Outlet />
		</Fragment>

	)
}


export function SignupPage(props) {
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNo, setPhoneNo] = useState("");
	const [country, setCountry] = useState("");
	const [countryState, setCountryState] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const dispatch = useDispatch()

	const auth = useSelector((state) => state.auth)
	const navigate = useNavigate()

	useEffect(() => {
		console.log("Auth", auth.status);
		if (auth.status == Status.success) {
			navigate("/auth/verify")
		}
	}, [auth])


	const handleSubmit = (e) => {
		e.preventDefault();
		const isValidated = handleValidations([
			validateRequired(firstName),
			validateRequired(lastName),
			validateRequired(email),
			validateRequired(phoneNo),
			validateRequired(country),
			validateRequired(password),
			validatePaswdMatch(password, confirmPassword),
		]);
		if (isValidated) {
			dispatch(verifyUserThunk({
				"email": email,
				"password": password,
				"first_name": firstName,
				"last_name": lastName,
				"country_of_residence": country,
				"state_of_residence": countryState,
				"phone_number": phoneNo,
			}))
		}
	}
	return (
		<Layout appBar={<Appbar />}>
			<section className={styles.auth}>
				<div className={styles.inner}>
					<article>
						<h2>Sign Up</h2>
						<p>We love to see you here! <br />Explore the endless possibilities</p>
					</article>
					<form onSubmit={handleSubmit}>
						<h3>Create account</h3>
						<p>Please fill the following details</p>
						<section className={styles.formFields}>
							{/* <input placeholder="username" /> */}
							<InputField placeholder="email"
								_error={validateRequired(email)}
								onChange={(e) => setEmail(e.target.value)}
								type={"email"}
								value={email}
							/>
							<InputField placeholder="first name"
								_error={validateRequired(firstName)}
								onChange={(e) => setFirstName(e.target.value)}
								value={firstName}
							/>
							<InputField placeholder="last name"
								_error={validateRequired(lastName)}
								onChange={(e) => setLastName(e.target.value)}
								value={lastName}
							/>
							<InputField placeholder="phone number"
								_error={validateRequired(phoneNo)}
								onChange={(e) => setPhoneNo(e.target.value)}
								value={phoneNo}
							/>
							<InputField placeholder="country of residence"
								_error={validateRequired(country)}
								onChange={(e) => setCountry(e.target.value)}
								value={country}
							/>
							<InputField placeholder="state of residence"
								// _error={validateRequired(countryState)}
								onChange={(e) => setCountryState(e.target.value)}
								value={countryState}
							/>
							<InputField placeholder="password"
								_error={validateRequired(password)}
								onChange={(e) => setPassword(e.target.value)}
								type={"password"}
								value={password}
							/>
							<InputField placeholder="confirm password"
								_error={validatePaswdMatch(password, confirmPassword)}
								onChange={(e) => setConfirmPassword(e.target.value)}
								type={"password"}
								value={confirmPassword}
							/>
							<div className={styles.btns}>
								<Button theme={"orange"} type={"submit"}>Sign Up</Button>
								<LinkButton theme={"white"} to={"/auth/login"}>Login</LinkButton>
							</div>
						</section>
					</form>
				</div>
			</section>
		</Layout>

	)
}

export function LoginPage(props) {
	const [searchParams, setSearchParams] = useSearchParams();
	const next = searchParams.get('next')
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch()

	const auth = useSelector((state) => state.auth)
	const navigate = useNavigate()

	useEffect(() => {
		console.log("Auth", auth.status);
		if (auth.status == Status.success) {
			navigate(next ?? "/print")
		}
	}, [auth])


	const handleSubmit = (e) => {
		e.preventDefault();
		const isValidated = handleValidations([
			validateRequired(email),
			validateRequired(password)
		]);
		if (isValidated) {
			dispatch(loginUserThunk({
				"email": email,
				"password": password
			}))
		}
	}

	return (
		<Layout appBar={<Appbar />}>
			<section className={styles.auth}>
				<div className={styles.inner}>
					<article>
						<h2>Login</h2>
						<p>It feels good to be back! <br />Explore more!</p>
					</article>
					<form onSubmit={handleSubmit}>
						<h3>Explore more!</h3>
						<p>Please fill the following details</p>
						<section className={styles.formFields}>
							<InputField placeholder="email"
								_error={validateRequired(email)}
								onChange={(e) => setEmail(e.target.value)}
								type={"email"}
								value={email}
							/>
							<InputField placeholder="password"
								_error={validateRequired(password)}
								onChange={(e) => setPassword(e.target.value)}
								type={"password"}
								value={password}
							/>
							<div className={styles.btns}>
								<Button type={"submit"} theme={"orange"}>Login</Button>
								<LinkButton theme={"white"} to={"/auth/signup"}>Sign Up</LinkButton>
							</div>
						</section>
					</form>
				</div>
			</section>
		</Layout>

	)
}

export function OTPPage(props) {
	const [OTP, setOTP] = useState("");

	const dispatch = useDispatch()
	const auth = useSelector((state) => state.auth)
	const navigate = useNavigate()

	useEffect(() => {
		console.log("Auth", auth.status);
		if (auth.status == Status.success) {
			navigate("/auth/login")
		}
	}, [auth])

	const handleSubmit = (e) => {
		e.preventDefault()
		const isValidated = handleValidations([
			validateRequired(OTP)
		])
		console.log("submitting")
		if (isValidated) {
			console.log("submitting")
			dispatch(registerUserThunk(OTP))
		}
	}
	return (
		<Layout appBar={<Appbar />}>
			<section className={styles.auth}>
				<div className={styles.inner}>
					<article>
						<h2>Verify</h2>
						<p>An OTP email is sent to you<br />Verify your account!</p>
					</article>
					<form onSubmit={handleSubmit}>
						<h3>Explore more!</h3>
						<p>Please fill the following details</p>
						<section className={styles.formFields}>
							<InputField placeholder="OTP"
								_error={validateRequired(OTP)}
								onChange={(e) => setOTP(e.target.value)}
								value={OTP}
							/>
							<div className={styles.btns}>
								<Button type={"submit"} theme={"orange"}>Continue</Button>
							</div>
						</section>
					</form>
				</div>
			</section>

		</Layout>

	)
}

export function AuthPage(props) {
	const [searchParams, setSearchParams] = useSearchParams();
	const next = searchParams.get('next')
	return (
		<Layout appBar={<Appbar />}>
			<section className={styles.auth}>
				<div className={styles.inner}>
					<article>
						<h2>Ready to explore</h2>
						<p>We love to see you here!<br />Explore the endless possibilities</p>
					</article>
					<section className={styles.image}>
						<img src={img1} alt="authentication" />
					</section>
				</div>
				<div className={styles.row}>
					<div className={styles.buttons}>
						<Link to={"signup"}>SIGNUP</Link>
						<Link to={`login${next ? `?next=${next}` : ''}`}>LOGIN</Link>
					</div>
				</div>
			</section>

		</Layout>

	)
}