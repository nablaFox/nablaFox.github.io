<script>
	import ThemeSwitcher from '#lib/components/ThemeSwitcher.svelte'

	import { onMount } from 'svelte'
	import { resolve } from '$app/paths'

	let time = $state('')

	onMount(() => {
		const clock = new Intl.DateTimeFormat('it-IT', {
			timeZone: 'Europe/Rome',
			hour: '2-digit',
			minute: '2-digit'
		})
		const update = () => (time = clock.format(Date.now()))

		update()
		const interval = setInterval(update, 1_000)
		return () => clearInterval(interval)
	})
</script>

<footer
	class="mb-8 flex items-center justify-between gap-4 px-5 lg:min-h-(--header-height) lg:px-8"
>
	<div class="flex gap-4 text-xs text-quiet">
		<span class="flex items-center font-mono">© 2026</span>

		<a class="link-underline" href={resolve('/(home)')}>RSS</a>

		<span title="Somewhere in Italy" class="inline-flex items-center gap-2 font-mono">
			<span class="sr-only">Local time in Italy:</span>
			<span class="tabular-nums">{time || '--:--'}</span>
			<svg
				aria-hidden="true"
				viewBox="0 0 12 10"
				fill="none"
				stroke-width="1.5"
				stroke-linecap="round"
				class="h-2.5 w-3 shrink-0"
			>
				<path d="M2 2v6" stroke="#56866c" />
				<path d="M6 2v6" stroke="#e9e9e5" />
				<path d="M10 2v6" stroke="#b46767" />
			</svg>
		</span>
	</div>

	<ThemeSwitcher
		class="flex size-11 items-center justify-center text-quiet transition-colors hover:text-fg focus-visible:text-fg lg:hidden"
	/>
</footer>
