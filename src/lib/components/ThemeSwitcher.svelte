<script module lang="ts">
	import { MediaQuery } from 'svelte/reactivity'

	const systemDark = new MediaQuery('(prefers-color-scheme: dark)', false)

	let theme = $state<'light' | 'dark'>()
</script>

<script lang="ts">
	let { class: classProp }: { class?: string } = $props()

	const isDark = $derived(theme ? theme === 'dark' : systemDark.current)
	const label = $derived(`Switch to ${isDark ? 'light' : 'dark'} theme`)
</script>

<button
	onclick={() => {
		theme = isDark ? 'light' : 'dark'
		document.documentElement.dataset.theme = theme
	}}
	type="button"
	class={[classProp, 'cursor-pointer']}
	aria-label={label}
	title={label}
>
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
		class="size-4 lg:size-4.5"
	>
		{#if isDark}
			<path
				d="M20.5 14A8.5 8.5 0 1 1 10 3.5 7.5 7.5 0 0 0 20.5 14Z"
				fill="currentColor"
				stroke="none"
			/>
		{:else}
			<circle cx="12" cy="12" r="3.5" />
			<path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
		{/if}
	</svg>
</button>
