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
	let animation = "animate__fadeInUp"

	useEffect(() => {
		let classList = ["animate__animated", animation]

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.previousElementSibling !== null) {
							entry.target.classList.remove("animate__fadeInUp")
							entry.target.classList.add(...classList)
						}
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

		setTimeout(() => {
			divRef?.current?.classList?.remove(...classList)
		}, 800)
	}, [])

	return (
		<div
			ref={divRef}
			className={`${styles.categoryDiv} animate__animated ${animation}`}
		>
			{shouldShowCategoryPic && <CategoryPic category={category} />}

			<h2 className={utilStyles.headingLg}>
				{returnCategoryString(category)}
			</h2>

			<Apps apps={appsInCategory} />
		</div>
	)
}

function CategoryPic({ category }) {
	useEffect(() => {
		let classList = ["animate__animated", "animate__zoomIn"]

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
				rootMargin: "20px",
				threshold: 0.1,
			}
		)

		observer.observe(divRef.current)
	}, [])

	let divRef = useRef(null)

	return (
		<div className={styles.categoryLeft} ref={divRef}>
			<img
				className={styles.categoryIcon}
				width={300}
				src={`/categories/${category}.webp`}
				alt={category}
			/>
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

	useEffect(() => {
		let query = localStorage?.getItem("query")

		if (query != "" && query != null) {
			handleInputChange({ target: { value: query } })
			setQueryText(query)
		}

		localStorage?.setItem("query", "")
	})

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
