<script>
	import ArrowIcon from '#lib/components/ArrowIcon.svelte'
</script>

<aside
	class="flex flex-col border-b px-5 py-7 lg:sticky lg:top-(--header-height) lg:h-[calc(100dvh-var(--header-height))] lg:self-start lg:border-r lg:border-b-0 lg:p-20"
>
	<p class="mb-4.5 font-mono text-xs">
		<span class="font-medium text-accent">$</span>
		<span class="text-muted">whoami</span>
	</p>

	<h1 class="mb-5 text-6xl font-medium">Antonio Farese</h1>

	<p class="text-lg text-muted">Software developer. Curious by default.</p>

	<div class="mt-7 flex gap-5 text-sm" aria-label="email & linkedin">
		<a href="" class="link-underline">Email</a>
		<a href="" class="link-underline">LinkedIn</a>
	</div>

	<a
		href="https://github.com/nablaFox/dotfiles"
		class="group mt-11 block w-fit"
		aria-label="arch linux rice"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div class="mb-0.5 flex items-center gap-2 font-mono text-xs text-muted">
			<span class="font-medium text-accent">$</span>
			<span>ls</span>
			<span class="text-fg link-underline">~/.config</span>
			<ArrowIcon size={12} />
		</div>

		<span class="font-mono text-xs text-quiet"># arch rice</span>
	</a>

	<!-- <div>Lissajous</div> -->
</aside>
