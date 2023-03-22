import styles from "./layout.module.css"
import authorStyles from "./author.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"
import { authorName, aboutAuthor, blogsAbout } from "./config"

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
		<section className={utilStyles.headingMd}>
			<p className={authorStyles.aboutAuthor}>{aboutAuthor}</p>
			<p className={authorStyles.blogsAbout}>{blogsAbout}</p>
		</section>
	)
}
