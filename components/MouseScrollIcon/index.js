import styles from "./mouseScrollIcon.module.css"

export default function MouseScrollIcon() {
	let style = `animate__animated animate__delay__500ms animate__fadeInUp`

	return <div className={`${styles.iconScroll} ${style}`}> </div>
}
