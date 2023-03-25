import styles from "./searchBar.module.css"

export default function Search({queryText, handleInputChange}) {
	return (
		<div className={`${styles.searchBar} animate__animated animate__delay__500ms animate__jackInTheBox`}>
			<input
				type="text"
				placeholder="Search for apps..."
				autoFocus={true}
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
