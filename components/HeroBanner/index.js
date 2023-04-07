import { useEffect, useRef } from "react"
import { githubUserName, authorName } from "../config"
import utilStyles from "../../styles/utils.module.css"
import styles from "../../components/layout.module.css"
import Author from "../Author"

export default function HeroBanner({ setShouldShow }) {
	let headerRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setShouldShow(false)
					} else {
						setShouldShow(true)
					}
				})
			},
			{
				root: null,
				threshold: 0.1,
			}
		)

		observer.observe(headerRef.current)
	}, [])

	return (
		<header className={styles.header} ref={headerRef}>
			<img
				src={`https://github.com/${githubUserName}.png`}
				className={`${utilStyles.borderCircle} animate__animated animate__jackInTheBox`}
				height={350}
				width={350}
				alt={authorName}
			/>

			<h1 className={utilStyles.heading2Xl}>
				<Author />
			</h1>
		</header>
	)
}
