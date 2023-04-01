import Link from "next/link"
import { githubUserName, authorName } from "../config"
import styles from "./topBar.module.css"

export default function TopBar({ actionText, actionLink, shouldShow }) {
	return (
		<div
			className={styles.topBar}
			style={{ top: shouldShow ? "0" : "-10vh" }}
		>
			<div className={styles.topBarLeft}>
				<img
					src={`https://github.com/${githubUserName}.png`}
					height={35}
					width={35}
					alt={authorName}
				/>
				<span>{githubUserName}</span>
			</div>

			<Link href={actionLink}>
				<button type="button">{actionText}</button>
			</Link>
		</div>
	)
}
