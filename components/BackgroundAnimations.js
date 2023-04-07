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

export function StaryBackground() {
	let customStrokeWidth = `0.5`
	let color1 = `#9bcc31`
	let color2 = `#f5b70f`
	let color3 = `#089ccc`
	let color4 = `#cc0505`
	let color5 = `#e7e0c9`

	return (
		<div
			style={{
				position: "absolute",
				top: "0",
				left: "0",
				width: "98%",
				zIndex: "-1",
				overflow: "hidden",
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				style={{
					margin: "auto",
					display: "block",
					zIndex: "-1",
					position: "relative",
				}}
				width="1536"
				preserveAspectRatio="xMidYMid"
				viewBox="0 0 1536 754"
			>
				<g transform="translate(768,377) scale(1,1) translate(-768,-377)">
					<circle
						cx="594.954049482285"
						cy="431.6890767204904"
						r="10.82728847148417"
						fill="none"
						stroke={color1}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;10.82728847148417"
							begin="0s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="0s"
						></animate>
					</circle>
					<circle
						cx="574.8227151923323"
						cy="664.1644681017922"
						r="18.466915234175808"
						fill="none"
						stroke={color1}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;18.466915234175808"
							begin="-0.0625s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.0625s"
						></animate>
					</circle>
					<circle
						cx="1054.092152735451"
						cy="537.6191550766395"
						r="15.300918295273062"
						fill="none"
						stroke={color1}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;15.300918295273062"
							begin="-0.125s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.125s"
						></animate>
					</circle>
					<circle
						cx="432.04893137294414"
						cy="169.45045951209948"
						r="16.212083024383936"
						fill="none"
						stroke={color2}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;16.212083024383936"
							begin="-0.1875s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.1875s"
						></animate>
					</circle>
					<circle
						cx="683.2744313623966"
						cy="676.2722052862247"
						r="10.49460595473872"
						fill="none"
						stroke={color2}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;10.49460595473872"
							begin="-0.25s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.25s"
						></animate>
					</circle>
					<circle
						cx="1111.2616940909647"
						cy="599.9021659174433"
						r="14.2014217378477"
						fill="none"
						stroke={color1}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;14.2014217378477"
							begin="-0.3125s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.3125s"
						></animate>
					</circle>
					<circle
						cx="560.242677160487"
						cy="661.1625923076309"
						r="11.043096371022699"
						fill="none"
						stroke={color1}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;11.043096371022699"
							begin="-0.375s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.375s"
						></animate>
					</circle>
					<circle
						cx="918.3134638454007"
						cy="298.4872012958346"
						r="19.892722391321925"
						fill="none"
						stroke={color2}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;19.892722391321925"
							begin="-0.4375s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.4375s"
						></animate>
					</circle>
					<circle
						cx="366.10218694413373"
						cy="456.6155688201225"
						r="11.348345918216028"
						fill="none"
						stroke={color3}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;11.348345918216028"
							begin="-0.5s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.5s"
						></animate>
					</circle>
					<circle
						cx="116.37685633616246"
						cy="135.27219642153727"
						r="10.199114263593252"
						fill="none"
						stroke={color2}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;10.199114263593252"
							begin="-0.5625s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.5625s"
						></animate>
					</circle>
					<circle
						cx="582.1995037913424"
						cy="599.490468344664"
						r="19.080985067445823"
						fill="none"
						stroke={color1}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;19.080985067445823"
							begin="-0.625s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.625s"
						></animate>
					</circle>
					<circle
						cx="691.607571144272"
						cy="380.7650365735281"
						r="11.631989299620294"
						fill="none"
						stroke={color4}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;11.631989299620294"
							begin="-0.6875s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.6875s"
						></animate>
					</circle>
					<circle
						cx="623.2966765292078"
						cy="501.2482765389588"
						r="13.881115506948127"
						fill="none"
						stroke={color4}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;13.881115506948127"
							begin="-0.75s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.75s"
						></animate>
					</circle>
					<circle
						cx="1045.4444890448542"
						cy="74.67367234967378"
						r="19.778393827175698"
						fill="none"
						stroke={color5}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;19.778393827175698"
							begin="-0.8125s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.8125s"
						></animate>
					</circle>
					<circle
						cx="688.9711400878682"
						cy="462.58779884193035"
						r="13.400078444364077"
						fill="none"
						stroke={color2}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;13.400078444364077"
							begin="-0.875s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.875s"
						></animate>
					</circle>
					<circle
						cx="1383.646470687951"
						cy="279.36043223933217"
						r="12.945995192327853"
						fill="none"
						stroke={color1}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;12.945995192327853"
							begin="-0.9375s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-0.9375s"
						></animate>
					</circle>
					<circle
						cx="372.7308951822252"
						cy="249.7665928268642"
						r="10.920047095289194"
						fill="none"
						stroke={color5}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;10.920047095289194"
							begin="-1s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-1s"
						></animate>
					</circle>
					<circle
						cx="243.61015362371205"
						cy="472.33364355866075"
						r="11.178437212681974"
						fill="none"
						stroke={color3}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;11.178437212681974"
							begin="-1.0625s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-1.0625s"
						></animate>
					</circle>
					<circle
						cx="1307.87144151395"
						cy="532.7057548776711"
						r="16.816396672428493"
						fill="none"
						stroke={color5}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;16.816396672428493"
							begin="-1.125s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-1.125s"
						></animate>
					</circle>
					<circle
						cx="248.2690270507716"
						cy="548.8375019490202"
						r="12.788323873869864"
						fill="none"
						stroke={color5}
						stroke-width={customStrokeWidth}
					>
						<animate
							attributeName="r"
							repeatCount="indefinite"
							dur="1.25s"
							values="0;12.788323873869864"
							begin="-1.1875s"
						></animate>
						<animate
							attributeName="opacity"
							repeatCount="indefinite"
							dur="1.25s"
							values="1;0"
							begin="-1.1875s"
						></animate>
					</circle>
				</g>
			</svg>
		</div>
	)
}