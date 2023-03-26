import Head from "next/head"
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"
import { authorName, githubUserName, siteTitle } from "./config"
import { AuthorSection } from "./author"

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link
					rel="icon"
					href={`https://github.com/${githubUserName}.png`}
				/>
				<meta name="description" content={siteTitle} />
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<img
							src="/images/laptopguy.webp"
							className={`${utilStyles.borderCircle} animate__animated animate__bounceInDown`}
							height={350}
							width={350}
							alt={authorName}
						/>

						<h1 className={utilStyles.heading2Xl}>
							<AuthorSection />
						</h1>
					</>
				) : (
					<></>
				)}
			</header>
			<main>{children}</main>
		</div>
	)
}
