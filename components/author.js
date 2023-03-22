import styles from "./layout.module.css"
import authorStyles from "./author.module.css"
import Link from "next/link"
import { authorName, githubUserName } from "./config"

export default function Author() {
	return (
		<>
			<Link href="/">
					<div className={styles.authorContainer}>
						<div className="authorImageContainer">
							<img
								src="/images/profile.png"
								className={styles.borderCircle}
								height={40}
								width={40}
								alt={authorName}
							/>
						</div>

						<div className="authorNameContainer">
							<span>{authorName}</span>
						</div>
					</div>
			</Link>
		</>
	)
}

export function AuthorSection() {
	return (
		<p className={authorStyles.aboutAuthor}>
			{"Web Apps by "}
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
