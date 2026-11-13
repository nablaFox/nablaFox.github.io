<script lang="ts">
	const centerX = 48
	const centerY = 36

	const curves: [number, number, number][] = [
		[3, 2, 0.4],
		[5, 4, 0.65],
		[2, 3, 0.2],
		[3, 4, 0.35]
	]

	let curveIndex = $state(0)

	function lissajous(a: number, b: number, phase: number): string {
		let d = ''

		for (let i = 0; i <= 360; ++i) {
			const t = (i / 360) * Math.PI * 2
			const x = 48 + 38 * Math.sin(a * t + phase)
			const y = 36 + 26 * Math.sin(b * t)
			d += (i ? 'L' : 'M') + x.toFixed(2) + ',' + y.toFixed(2)
		}

		return d
	}
</script>

<button
	class="hidden cursor-pointer sm:block"
	aria-label="Lissajous curve"
	onclick={() => (curveIndex = (curveIndex + 1) % curves.length)}
>
	<svg
		viewBox="0 0 96 72"
		aria-hidden="true"
		fill="none"
		class="block h-12 w-16 text-accent lg:h-16 lg:w-21"
	>
		<path
			stroke="currentColor"
			stroke-width="1.12"
			stroke-linecap="round"
			stroke-linejoin="round"
			d={lissajous(...curves[curveIndex])}
		></path>

		<circle cx={centerX} cy={centerY} r="1.35" fill="currentColor" opacity=".7"></circle>
	</svg>
</button>
