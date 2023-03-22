import styles from "./app.module.css"
import utilStyles from "../../styles/utils.module.css"
import Link from "next/link"

function returnCategoryString(type) {
	switch (type) {
		case "webapp":
			return "Web Apps"
		case "mobile":
			return "Mobile Apps"
		case "desktop":
			return "Desktop Apps"
		case "game":
			return "Games"
		default:
			return "Other"
	}
}

function AppCard({ app }) {
	return (
		<Link className={styles.link} href={`/posts/${app.id}`}>
			<div className={styles.appCard}>
				<img
					className={styles.icon}
					src={app.iconSrc}
					alt={app.title}
					height={60}
					width={60}
				/>
				<span className={styles.appName}>{app.title}</span>
				<p className={styles.appDescription}>{app.shortDescription}</p>
			</div>
		</Link>
	)
}

function Apps({ apps }) {
	return (
		<div className={styles.apps}>
			{apps.map((app) => (
				<AppCard app={app} key={app.id} />
			))}
		</div>
	)
}

export default function AppCategory({ apps }) {

	const categories = apps.map((app) => app.category)
	const uniqueCategories = [...new Set(categories)]

	return (
		<div>
			{uniqueCategories.map((category) => {
				const appsInCategory = apps.filter(
					(app) => app.category === category
				)
				return (
					<div key={category}>
						<h2 className={utilStyles.headingLg}>
							{returnCategoryString(category)}
						</h2>

						<Apps apps={appsInCategory} />
					</div>
				)
			})}
		</div>
	)
}
