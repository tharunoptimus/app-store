import Head from "next/head"
import Layout from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../lib/posts"
import { siteTitle } from "../components/config"
import AppCategory from "../components/AppCard"
import SearchBar from "../components/SearchBar"

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section
				className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
			>
			<SearchBar />
			<AppCategory apps={allPostsData} />
			</section>
		</Layout>
	)
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData,
		},
	}
}
