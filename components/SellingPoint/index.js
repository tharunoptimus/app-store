import styles from "./sellingPoint.module.css"
import data from "./data"
import { useEffect, useRef } from "react"

export default function SellingPoint() {
	return (
		<div className={styles.sellingPointContainer}>

			<SkillHeading title={"What I bring to the table"} subtitle={"Stuff About Myself"} />

			{data.map((point, id) => (
				<SellingPointCard key={id} point={point} />
			))}
		</div>
	)
}

function SellingPointCard({ point }) {

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
		<div className={styles.sellingPointCard} ref={divRef}>
			<img src={point.imgSrc} alt={point.title} height={200} width={200} />
			<h3 className={styles.sellingPointTitle}>{point.title}</h3>
			<p className={styles.sellingPointDescription}>
				{point.description}
			</p>
		</div>
	)
}

export function SkillHeading({ title, subtitle }) {
	
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
				rootMargin: "50px",
				threshold: 0.1,
			}
		)

		observer.observe(divRef.current)
	}, [])


	return (
		<div className={styles.skillHeading} ref={divRef}>
			<h3 className={styles.skillTitle}>{title}</h3>
			<p className={styles.skillSubtitle}>{subtitle}</p>
		</div>
	)
}