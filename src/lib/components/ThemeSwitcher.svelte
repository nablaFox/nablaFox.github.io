<script lang="ts">
	let { class: classProp }: { class?: string } = $props()
</script>

<button type="button" class={[classProp, 'cursor-pointer']} aria-label="Theme switcher">
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		aria-hidden="true"
		class="size-4 lg:size-4.5"
	>
		<circle cx="12" cy="12" r="3.5"></circle>
		<path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"></path>
	</svg>
</button>
