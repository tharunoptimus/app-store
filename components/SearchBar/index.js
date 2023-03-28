import styles from "./searchBar.module.css"
import { useRef } from "react"

export default function Search({ queryText, handleInputChange, setQueryText }) {
	let divRef = useRef(null)

	let handleClick = () => {
		divRef.current.classList.remove("animate__delay__500ms")
		divRef.current.classList.add("animate__pulse")
	}

	if (typeof window !== "undefined") {
		let query = localStorage?.getItem("query")
	
		if(query != "" && query != null) {
			setQueryText(query)
			handleInputChange({target: {value: query}})
		}
	
		localStorage.setItem("query", "")
	}

	return (
		<>
			<div className={styles.stickyDiv}>
				&nbsp;
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

					<img
						src="/images/search.webp"
						alt="search"
						height={20}
						width={20}
					/>
				</div>
				&nbsp;
			</div>
		</>
	)
}
