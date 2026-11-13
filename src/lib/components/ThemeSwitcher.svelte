<script lang="ts">
	let { class: classProp }: { class?: string } = $props()
</script>

<button
	onclick={() => {
		const root = document.documentElement

		const isDark = root.dataset.theme
			? root.dataset.theme === 'dark'
			: matchMedia('(prefers-color-scheme: dark)').matches

		root.dataset.theme = isDark ? 'light' : 'dark'
	}}
	type="button"
	class={[classProp, 'cursor-pointer']}
	aria-label="Toggle theme"
	title="Toggle theme"
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
		<path
			class="moon"
			d="M20.5 14A8.5 8.5 0 1 1 10 3.5 7.5 7.5 0 0 0 20.5 14Z"
			fill="currentColor"
			stroke="none"
		/>

		<g class="sun">
			<circle cx="12" cy="12" r="3.5" />
			<path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
		</g>
	</svg>
</button>

<style>
	.moon {
		display: none;
	}

	:global(html[data-theme='dark']) .sun {
		display: none;
	}

	:global(html[data-theme='dark']) .moon {
		display: initial;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-theme='light'])) .sun {
			display: none;
		}

		:global(html:not([data-theme='light'])) .moon {
			display: initial;
		}
	}
</style>
