import styles from "./sellingPoint.module.css"
import data from "./data"

export default function SellingPoint() {
	return (
		<div className={styles.sellingPointContainer}>

            <span className={styles.containerTitle}>Stuff About Myself</span>

			{data.map((point, id) => (
				<SellingPointCard key={id} point={point} />
			))}
		</div>
	)
}

function SellingPointCard({ point }) {
	return (
		<div className={styles.sellingPointCard}>
			<img src={point.imgSrc} alt={point.title} height={200} width={200} />
			<h3 className={styles.sellingPointTitle}>{point.title}</h3>
			<p className={styles.sellingPointDescription}>
				{point.description}
			</p>
		</div>
	)
}
