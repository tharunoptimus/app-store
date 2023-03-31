import Head from "next/head"
import utilStyles from "../../styles/utils.module.css"
import { BackToLocationLink } from "./[id].js"
import { getSortedAppsData } from "../../lib/apps"
import { siteTitle, authorName, githubUserName } from "../../components/config"
import styles from "../../components/layout.module.css"
import AppContainer from "../../components/AppCard"

export default function Home({ allAppsData }) {
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

				<title>{siteTitle}</title>
			</Head>

			<BackToLocationLink route="/" content="Home" />

			<main>
				<section
					className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
				>
					<AppContainer apps={allAppsData} />
				</section>
			</main>
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
