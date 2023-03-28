import styles from "./app.module.css"
import utilStyles from "../../styles/utils.module.css"
import Link from "next/link"
import SearchBar from "../SearchBar"
import Fuse from "fuse.js"
import { useState, useEffect, useRef } from "react"

function returnCategoryString(type) {
	switch (type) {
		case "webapp":
			return "Web Apps"
		case "pwa":
			return "Progressive Web Apps"
		case "mobile":
			return "Mobile Apps"
		case "api":
			return "APIs"
		case "extensions":
			return "Chrome and VS Code Extensions"
		case "npm":
			return "NPM Packages"
		case "game":
			return "Games"
		case "webxr":
			return "WebXR"
		case "ml":
			return "Machine Learning Apps"
		default:
			return "Other"
	}
}

function AppCard({ app }) {
	return (
		<Link className={styles.link} href={`/app/${app.id}`}>
			<div className={styles.appCard}>
				<img
					className={styles.icon}
					src={app.iconSrc}
					alt={app.title}
					height={60}
					width={60}
				/>
				<div className={styles.appRight}>
					<span className={styles.appName}>{app.title}</span>
					<p className={styles.appDescription}>
						{app.shortDescription}
					</p>
				</div>
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

function AppCategory({ apps, shouldShowCategoryPic }) {
	const categories = apps.map((app) => app.category)
	const uniqueCategories = [...new Set(categories)]

	uniqueCategories.sort((a, b) => {
		const order = [
			"webapp",
			"pwa",
			"mobile",
			"api",
			"extensions",
			"npm",
			"game",
			"webxr",
			"ml",
			"other",
		]
		return order.indexOf(a) - order.indexOf(b)
	})

	return (
		<div>
			{uniqueCategories.map((category) => {
				const appsInCategory = apps.filter(
					(app) => app.category === category
				)

				return (
					<AppCategoryCard
						shouldShowCategoryPic={shouldShowCategoryPic}
						key={category}
						appsInCategory={appsInCategory}
						category={category}
					/>
				)
			})}
		</div>
	)
}

function AppCategoryCard({ category, appsInCategory, shouldShowCategoryPic }) {
	let divRef = useRef(null)

	useEffect(() => {
		let classList = ["animate__animated", "animate__fadeInUp"]

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(...classList)
						entry.target.classList.remove(`${styles.hidden}`)
						observer.unobserve(entry.target)
					}
				})
			},
			{
				root: null,
				rootMargin: "100px",
				threshold: 0.1,
			}
		)

		observer.observe(divRef.current)
	}, [])

	return (
		<div ref={divRef} className={styles.categoryDiv}>
			{shouldShowCategoryPic && (
				<div className={styles.categoryLeft}>
					<img
						className={styles.categoryIcon}
						width={300}
						src={`/categories/${category}.webp`}
						alt={category}
					/>
				</div>
			)}
			
			<h2 className={utilStyles.headingLg}>
				{returnCategoryString(category)}
			</h2>

			<Apps apps={appsInCategory} />
		</div>
	)
}

export default function AppContainer({ apps }) {
	let [queryText, setQueryText] = useState("")
	let [showApps, setShowApps] = useState(apps)
	let [shouldShowCategoryPic, setShouldShowCategoryPic] = useState(true)

	let fuse = new Fuse(apps, {
		keys: [
			"title",
			"category",
			"tags",
			"shortDescription",
			"source",
			"github",
			"stack",
		],
		threshold: 0.3,
	})

	let handleInputChange = (e) => {
		let result = fuse.search(e.target.value)
		let filteredApps = result.map((app) => app.item)

		if (e.target.value === "") {
			filteredApps = apps
		}

		if (filteredApps.length < apps.length) {
			setShouldShowCategoryPic(false)
		} else {
			setShouldShowCategoryPic(true)
		}

		setShowApps(filteredApps)
		setQueryText(e.target.value)
	}

	return (
		<div className={styles.appContainer}>
			<SearchBar
				queryText={queryText}
				handleInputChange={handleInputChange}
				setQueryText={setQueryText}
			/>
			<AppCategory
				apps={showApps}
				shouldShowCategoryPic={shouldShowCategoryPic}
			/>
		</div>
	)
}
