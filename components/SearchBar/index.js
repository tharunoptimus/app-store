import styles from "./searchBar.module.css"
import { useRef } from "react"

export default function Search({ queryText, handleInputChange }) {
	let divRef = useRef(null)

	let handleClick = () => {
		divRef.current.classList.remove("animate__delay__500ms")
		divRef.current.classList.add("animate__pulse")
	}

	return (
		<div
			className={`${styles.searchBar} animate__animated animate__delay__500ms animate__jackInTheBox`}
			ref={divRef}
			onClick={handleClick}
		>
			<input
				type="text"
				placeholder="Search for apps..."
				value={queryText}
				onChange={handleInputChange}
			/>
			<button className={styles.searchIconButton}>
				<img
					src="/images/search.webp"
					alt="search"
					height={20}
					width={20}
				/>
			</button>
		</div>
	)
}
