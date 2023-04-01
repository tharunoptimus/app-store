import data from "./data"
import styles from "./techStack.module.css"
import { useEffect, useRef } from "react"
import { SkillHeading } from "../SellingPoint"

export default function TechStack() {
	return (
		<div className={styles.techStackContainer}>
            <SkillHeading title={"My Tech Stack"} subtitle={"Stuff I'm familiar with"} />
			<TechStackIconsContainer tech={data} />
		</div>
	)
}

function TechStackIconsContainer({ tech }) {
    return (
        <div className={styles.techStackIconsContainer}>
            {tech.map((item, id) => (
                <TechStackCard key={id} tech={item} />
            ))}
        </div>
    )
}

function TechStackCard({ tech }) {

    let availableAnimations = [
		"animate__fadeInUp",
		"animate__delay__500ms",
		"animate__bounceInDown",
		"animate__fadeInDown",
		"animate__bounceInUp",
		"animate__fadeInLeft",
		"animate__rollIn",
		"animate__zoomIn",
	]

    let randomAnimation =
		availableAnimations[
			Math.floor(Math.random() * availableAnimations.length)
		]

    useEffect(() => {
        let classList = ["animate__animated", randomAnimation]

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(...classList)
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
        <div className={styles.techStackCard} ref={divRef}>
            <img
                width={80}
                src={tech.imgSrc}
                alt={tech.title}
                title={tech.title}
            />
        </div>
    )
}