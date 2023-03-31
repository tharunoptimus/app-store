export default function WaveAnimation() {

    let strokeColor = `#d35400`
    let widthOfStroke = `0.1`

	return (
		<svg
			class="svg_WDAo"
			viewBox="0 0 1 1"
			style={{
				width: "90%",
				zIndex: "-1",
				position: "absolute",
				transform: "translateY(-89%)",
			}}
		>
			<path
				d="M0.3,0.5a0.2,0.45 0 1,0 0.4,0a0.2,0.45 0 1,0 -0.4,0"
				fill="none"
				stroke={strokeColor}
				stroke-linecap="round"
				style={{
					transformOrigin: "center center",
					transform: "rotate(120deg)",
					animation: "bganimation 20s linear infinite",
					strokeDasharray: "0.4236540522651584 1.6946162090606336",
					strokeWidth: widthOfStroke,
				}}
			></path>
			<path
				d="M0.3,0.5a0.2,0.45 0 1,0 0.4,0a0.2,0.45 0 1,0 -0.4,0"
				fill="none"
				stroke={strokeColor}
				stroke-linecap="round"
				stroke-width="0.035"
				style={{
					transformOrigin: "center center",
					transform: "rotate(0deg)",
					animation: "bganimation 20s linear infinite",
					strokeDasharray: "0.4236540522651584 1.6946162090606336",
					strokeWidth: widthOfStroke,
				}}
			></path>
			<path
				d="M0.3,0.5a0.2,0.45 0 1,0 0.4,0a0.2,0.45 0 1,0 -0.4,0"
				fill="none"
				stroke={strokeColor}
				stroke-linecap="round"
				stroke-width="0.035"
				style={{
					transformOrigin: "center center",
					transform: "rotate(240deg)",
					animation: "bganimation 20s linear infinite",
					strokeDasharray: "0.4236540522651584 1.6946162090606336",
					strokeWidth: widthOfStroke,
				}}
			></path>
		</svg>
	)
}
