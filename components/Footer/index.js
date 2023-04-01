import styles from "../layout.module.css"
import { authorName } from "../config"

export default function Footer() {
	return (
		<footer className={styles.footer}>
			{`All Rights Reserved © ${new Date().getFullYear()} ${authorName} | Apps`}
		</footer>
	)
}