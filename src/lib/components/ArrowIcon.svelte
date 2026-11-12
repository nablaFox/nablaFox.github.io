<script lang="ts">
	let { size = 16 } = $props<{ size?: number }>()
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 16 16"
	class="group-hover:text-accent group-focus-visible:text-accent"
	fill="none"
	stroke="currentColor"
	stroke-width="1.4"
	aria-hidden="true"
>
	<path d="M3 13 13 3M5 3h8v8" />
</svg>
