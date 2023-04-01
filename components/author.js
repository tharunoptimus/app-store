import Link from "next/link"
import authorStyles from "./author.module.css"
import utilStyles from "../styles/utils.module.css"
import { githubUserName } from "./config"
import { Typewriter } from "react-simple-typewriter"

export default function Author() {
	return (
		<>
			<p
				className={`${authorStyles.aboutAuthor} animate__animated animate__bounceInUp`}
			>
				{"Apps by "}
				<a
					href={`https://github.com/${githubUserName}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					@{githubUserName}
				</a>
			</p>
			<ExploreApps />
		</>
	)
}

function TypeWriterText() {
	return (
		<Typewriter
			words={[
				"Web Apps→",
				"PWAs→",
				"Packages→",
				"APIs→",
				"Extensions→",
				"Languages→",
				"Games→",
				"XR Apps→",
				"Apps→",
			]}
			loop={0}
			typeSpeed={70}
			deleteSpeed={50}
			delaySpeed={500}
		/>
	)
}

function ExploreApps() {
	return (
		<div
			className={`${utilStyles.exploreAppsDiv} animate__animated animate__bounceInUp`}
		>
			<Link href="/app">
				<span className={utilStyles.exploreAppsSpan}>
					Explore <TypeWriterText />
				</span>
			</Link>
		</div>
	)
}
