import styles from "./AuthPage.module.scss"
import Layout from "../../components/layout/Layout"
import Appbar from "../../components/appbar/Appbar"
import { Button, LinkButton } from "../../components/button/Button"
import { SlideFadeAnimation } from "../../components/animation/Animation"
import img1 from "./assets/bg2.png";
import { Link } from "react-router-dom"

export function SignupPage(props) {
	return (
		<Layout appBar={<Appbar />}>
			<SlideFadeAnimation>
				<section className={styles.auth}>
					<div className={styles.inner}>
						<article>
							<h2>Sign Up</h2>
							<p>We love to see you here! <br />Explore the endless possibilities</p>
						</article>
						<form>
							<h3>Create account</h3>
							<p>Please fill the following details</p>
							<section className={styles.formFields}>
								<input placeholder="username" />
								<input placeholder="email" />
								<input placeholder="password" />
								<input placeholder="confirm password" />
								<div className={styles.btns}>
									<Button theme={"orange"}>Sign Up</Button>
									<LinkButton theme={"white"} to={"/auth/login"}>Login</LinkButton>
								</div>
							</section>
						</form>
					</div>
				</section>
			</SlideFadeAnimation>
		</Layout>

	)
}

export function LoginPage(props) {
	return (
		<Layout appBar={<Appbar />}>
			<SlideFadeAnimation>
				<section className={styles.auth}>
					<div className={styles.inner}>
						<article>
							<h2>Login</h2>
							<p>It feels good to be back! <br />Explore more!</p>
						</article>
						<form>
							<h3>Explore more!</h3>
							<p>Please fill the following details</p>
							<section className={styles.formFields}>
								<input placeholder="username" />
								<input placeholder="password" />
								<div className={styles.btns}>
									<Button theme={"orange"}>Login</Button>
									<LinkButton theme={"white"} to={"/auth/signup"}>Sign Up</LinkButton>
								</div>
							</section>
						</form>
					</div>
				</section>
			</SlideFadeAnimation>
		</Layout>

	)
}

export function OTPPage(props) {
	return (
		<Layout appBar={<Appbar />}>
			<SlideFadeAnimation>
				<section className={styles.auth}>
					<div className={styles.inner}>
						<article>
							<h2>Verify</h2>
							<p>An OTP email is sent to you<br />Verify your account!</p>
						</article>
						<form>
							<h3>Explore more!</h3>
							<p>Please fill the following details</p>
							<section className={styles.formFields}>
								<input placeholder="OTP" />
								<div className={styles.btns}>
									<LinkButton theme={"orange"}>Continue</LinkButton>
								</div>
							</section>
						</form>
					</div>
				</section>
			</SlideFadeAnimation>

		</Layout>

	)
}

export function AuthPage(props) {
	return (
		<Layout appBar={<Appbar />}>
			<SlideFadeAnimation>
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
							<Link to={"login"}>LOGIN</Link>
						</div>
					</div>
				</section>
			</SlideFadeAnimation>

		</Layout>

	)
}