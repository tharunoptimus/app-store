import styles from "./appCard.module.css"

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

