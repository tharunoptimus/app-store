import styles from "./searchBar.module.css"

export default function Search() {
	return (
		<div className={styles.searchBar}>
			<input
				type="text"
				placeholder="Search for apps..."
				autoFocus={true}
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
