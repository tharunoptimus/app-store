import styles from "./layout.module.css"
import authorStyles from "./author.module.css"
import Link from "next/link"
import { authorName, githubUserName } from "./config"
import { Typewriter } from "react-simple-typewriter"

export default function Author() {
	return (
		<>
		</>
	)
}

export function AuthorSection() {
	return (
		<p className={`${authorStyles.aboutAuthor} animate__animated animate__flipInX`}>
			<Typewriter
				words={["Web Apps", "PWAs", "Packages", "APIs", "Extensions", "Languages", "Games", "XR Apps", "Apps"]}
				loop={5}
				typeSpeed={70}
				deleteSpeed={50}
				delaySpeed={1000}
			/>
			{" by "}
			<a
				href={`https://github.com/${githubUserName}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				@{githubUserName}
			</a>
		</p>
	)
}
