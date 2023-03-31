import Head from "next/head"
import Link from "next/link"
import utilStyles from "../styles/utils.module.css"
import { getSortedAppsData } from "../lib/apps"
import { siteTitle, authorName, githubUserName } from "../components/config"
import styles from "../components/layout.module.css"
import AppContainer from "../components/AppCard"
import Author from "../components/author"

export default function Home({ allAppsData }) {
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
					<ExploreApps />
				</section>
			</main>
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


function ExploreApps() {
	return (
		<div
			className={`${utilStyles.exploreAppsDiv} animate__animated animate__bounceInUp`}
		>
			<Link href="/app">
				<span className={utilStyles.exploreAppsSpan}>Explore Apps</span>
			</Link>
		</div>
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
