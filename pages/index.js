import Head from "next/head"
import utilStyles from "../styles/utils.module.css"
import { getSortedAppsData } from "../lib/apps"
import { siteTitle, authorName, githubUserName } from "../components/config"
import styles from "../components/layout.module.css"
import Author from "../components/author"
import SellingPoint from "../components/SellingPoint"
import TechStack from "../components/TechStack"

export default function Home() {
	return (
		<div className={styles.container} style={{maxWidth: "65rem"}}>
			<Head>
				<link
					rel="icon"
					href={`https://github.com/${githubUserName}.png`}
				/>
				<meta name="description" content={siteTitle} />
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />

				<title>{siteTitle}</title>
			</Head>

			<Header />

			<main>
				<section
					className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
				>
					<MouseScrollIcon />
					<TechStack />
					<SellingPoint />
				</section>
			</main>
			<Footer />
		</div>
	)
}

function Header() {
	return (
		<header className={styles.header}>
			<img
				src="/images/laptopguy.webp"
				className={`${utilStyles.borderCircle} animate__animated animate__bounceInDown`}
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

function Footer() {
	return (
		<footer className={styles.footer}>
			{`All Rights Reserved © ${new Date().getFullYear()} ${authorName} | Apps`}
		</footer>
	)
}

function MouseScrollIcon() {
	return (
		<div className={styles.iconScroll}> </div>
	)
}

export async function getStaticProps() {
	const allAppsData = getSortedAppsData()
	return {
		props: {
			allAppsData,
		},
	}
}
