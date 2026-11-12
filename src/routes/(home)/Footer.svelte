<script>
	import { resolve } from '$app/paths'
	import ThemeSwitcher from '#lib/components/ThemeSwitcher.svelte'
</script>

<footer
	class="mb-8 flex items-center justify-between gap-4 px-5 lg:mt-0 lg:min-h-(--header-height) lg:px-8"
>
	<div class="flex gap-4">
		<div class="flex items-center">
			<span class="font-mono text-xs text-quiet">© 2026</span>
		</div>

		<a class="text-xs text-quiet link-underline" href={resolve('/(home)')}> RSS </a>
	</div>

	<ThemeSwitcher
		class="flex size-11 items-center justify-center text-quiet transition-colors hover:text-fg focus-visible:text-fg lg:hidden"
	/>
</footer>
