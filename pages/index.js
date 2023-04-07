import Head from "next/head"
import { useState } from "react"
import utilStyles from "../styles/utils.module.css"
import { getSortedAppsData } from "../lib/apps"
import { siteTitle, githubUserName, hostedURL } from "../components/config"
import styles from "../components/layout.module.css"
import HeroBanner from "../components/HeroBanner"
import TopBar from "../components/TopBar"
import MouseScrollIcon from "../components/MouseScrollIcon"
import Footer from "../components/Footer"
import SellingPoint from "../components/SellingPoint"
import TechStack from "../components/TechStack"
import { StaryBackground } from "../components/BackgroundAnimations"

export default function Home() {
	let [shouldShow, setShouldShow] = useState(false)

	return (
		<div className={styles.container} style={{ maxWidth: "65rem" }}>
			<Head>
				<link
					rel="icon"
					href={`https://github.com/${githubUserName}.png`}
				/>
				<meta name="description" content={siteTitle} />
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content={hostedURL} />
				<meta property="og:title" content={siteTitle} />
				<meta
					property="og:description"
					content={siteTitle}
				/>
				<meta
					property="og:image"
					content={`${hostedURL}/images/ogimage.png`}
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={hostedURL} />
				<meta property="twitter:title" content={siteTitle} />
				<meta
					property="twitter:description"
					content={siteTitle}
				/>
				<meta
					property="twitter:image"
					content={`${hostedURL}/images/ogimage.png`}
				/>

				<title>{siteTitle}</title>
			</Head>

			<HeroBanner setShouldShow={setShouldShow} />

			<main>
				<section
					className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
				>
					<StaryBackground />
					<TopBar
						actionLink={"/app"}
						actionText={"Explore"}
						shouldShow={shouldShow}
					/>

					<MouseScrollIcon />
					<TechStack />
					<SellingPoint />
				</section>
			</main>
			<Footer />
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
