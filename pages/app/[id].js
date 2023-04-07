import Head from "next/head"
import Link from "next/link"
import { githubUserName, siteTitle, hostedURL } from "../../components/config"
import { getAllAppIds, getAppData } from "../../lib/apps"
import layoutStyles from "../../components/layout.module.css"
import utilStyles from "../../styles/utils.module.css"
import { useRef, useEffect } from "react"

export async function getStaticProps({ params }) {
	const appData = await getAppData(params.id)
	return {
		props: {
			appData,
		},
	}
}

export async function getStaticPaths() {
	const paths = getAllAppIds()
	return {
		paths,
		fallback: false,
	}
}

export default function Post({ appData }) {
	return (
		<div className={layoutStyles.container}>
			<Head>
				<link
					rel="icon"
					href={`https://github.com/${githubUserName}.png`}
				/>
				<meta name="description" content={siteTitle} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content={`${hostedURL}/app/${appData.id}`} />
				<meta property="og:title" content={`${appData.title} - ${siteTitle}`} />
				<meta
					property="og:description"
					content={`${appData.title} - ${siteTitle}`}
				/>
				<meta
					property="og:image"
					content={`${hostedURL}/icons/${appData.iconSrc.split("/").pop()}`}
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={`${hostedURL}/app/${appData.id}`} />
				<meta property="twitter:title" content={`${appData.title} - ${siteTitle}`} />
				<meta
					property="twitter:description"
					content={`${appData.title} - ${siteTitle}`}
				/>
				<meta
					property="twitter:image"
					content={`${hostedURL}/icons/${appData.iconSrc.split("/").pop()}`}
				/>


				<title>{appData.title}</title>
			</Head>
			<main>
				<article>
					<BackToLocationLink route="/app" content="Back to Apps" needBottomMargin={true} />

					<AppImage src={appData.iconSrc} title={appData.title} />

					<AppTitle title={appData.title} />

					<ShortDescription description={appData.shortDescription} />

					<AppTags tags={appData.tags} />

					<TechStackIcons stack={appData.stack} />

					<ActionButtons
						source={appData.source}
						github={appData.github}
					/>

					<div
						className={`animate__animated animate__delay__500ms animate__fadeInUp`}
						dangerouslySetInnerHTML={{
							__html: appData.contentHtml,
						}}
					/>

					<Comments />
				</article>
			</main>
		</div>
	)
}

export function BackToLocationLink({
	route,
	content,
	needBottomMargin = false,
}) {
	return (
		<div className={layoutStyles.backToHome}>
			<Link scroll={false} href={route}>
				<span
					className={`${layoutStyles.backToLocation} ${
						needBottomMargin ? layoutStyles.marginBottom3Rem : ""
					}`}
				>
					<img src="/left.svg" alt="back" height={35} width={35} />
					{content}
				</span>
			</Link>
		</div>
	)
}

function AppImage({ src, title }) {
	return (
		<img
			src={src}
			alt={title}
			height={100}
			width={100}
			className={`${utilStyles.appImage} animate__animated animate__rollIn`}
		/>
	)
}

function AppTitle({ title }) {
	return (
		<h1
			className={`${utilStyles.headingXl} animate__animated animate__fadeInUp`}
		>
			{title}
		</h1>
	)
}

function ShortDescription({ description }) {
	return (
		<span
			className={`${utilStyles.shortDescription} animate__animated animate__delay__500ms animate__fadeInUp`}
		>
			{description}
		</span>
	)
}

function AppTags({ tags }) {
	return (
		<div className={utilStyles.tagsContainer}>
			{tags.map((tag, id) => (
				<Tag key={id} tag={tag} />
			))}
		</div>
	)
}

function Tag({ tag }) {
	let handleClick = () => {
		if (typeof window !== "undefined") {
			localStorage.setItem("query", tag)
		}
	}

	return (
		<Link href={`/app`} onClick={handleClick}>
			<span className={utilStyles.tag}>{tag}</span>
		</Link>
	)
}

function TechStackIcons({ stack }) {
	return (
		<div className={utilStyles.techStackIconsContainer}>
			{stack.map((tech, id) => (
				<TechStackIcon key={id} tech={tech} />
			))}
		</div>
	)
}

function TechStackIcon({ tech }) {
	let handleClick = () => {
		if (typeof window !== "undefined") {
			localStorage.setItem("query", tech)
		}
	}

	return (
		<Link href={`/app`} onClick={handleClick}>
			<div className={utilStyles.techStackIconDiv}>
				<img
					src={`/stack/${tech}.svg`}
					alt={tech}
					title={tech}
					height={45}
					width={45}
					className={`${utilStyles.techStackIcon} animate__animated animate__rollIn`}
				/>
			</div>
		</Link>
	)
}

function AmongUsButton({ github }) {
	let handleClick = () => {
		window.open(github, "_blank")
	}

	return (
		<button
			className={`${utilStyles.amongUsButton} animate__animated animate__delay__500ms animate__fadeInDown`}
			onClick={handleClick}
		>
			<svg
				height="36px"
				width="36px"
				viewBox="0 0 36 36"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect fill="#fdd835" y="0" x="0" height="36" width="36"></rect>
				<path
					d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
					fill="#e53935"
				></path>
				<path
					d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
					fill="#b71c1c"
				></path>
				<path
					d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
					fill="#212121"
				></path>
				<path
					d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
					fill="#01579b"
				></path>
				<path
					d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
					fill="#212121"
				></path>
				<path
					d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
					fill="#81d4fa"
				></path>
				<path
					d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
					fill="#212121"
				></path>
				<path
					d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
					fill="#e1f5fe"
				></path>
			</svg>
			<span className={utilStyles.now}>Source</span>
			<span className={utilStyles.play}>View</span>
		</button>
	)
}

function LaunchButton({ source }) {
	let handleClick = () => {
		window.open(source, "_blank")
	}

	return (
		<button
			className={`${utilStyles.viewSourceButton} animate__animated animate__fadeInLeft`}
			onClick={handleClick}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24"
			>
				<path fill="none" d="M0 0h24v24H0z"></path>
				<path
					fill="currentColor"
					d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
				></path>
			</svg>
			<span>Launch App</span>
		</button>
	)
}

function ActionButtons({ source, github }) {
	return (
		<div className={utilStyles.actionButtons}>
			{github && <LaunchButton source={source} />}
			{source && <AmongUsButton github={github} />}
		</div>
	)
}

function Comments() {
	const ref = useRef(null)

	useEffect(() => {
		const scriptElement = document.createElement("script")
		scriptElement.async = true
		scriptElement.crossOrigin = "anonymous"
		scriptElement.src = "https://utteranc.es/client.js"

		scriptElement.setAttribute("issue-term", "pathname")
		scriptElement.setAttribute("label", "Comment 🐶⚡")
		scriptElement.setAttribute("repo", "tharunoptimus/app-store")
		scriptElement.setAttribute("theme", "preferred-color-scheme")

		ref.current?.appendChild(scriptElement)
	}, [])

	return <div ref={ref} />
}
