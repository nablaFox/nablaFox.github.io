<script>
	import ArrowIcon from '#lib/components/ArrowIcon.svelte'
	import GithubIcon from '#lib/components/GithubIcon.svelte'
	import LissajousCurve from '#lib/components/LissajousCurve.svelte'
</script>

<aside
	class="flex flex-col px-5 pt-8 pb-0 lg:sticky lg:top-(--header-height) lg:h-[calc(100dvh-var(--header-height))] lg:self-start lg:border-r lg:p-20"
>
	<p class="mb-4.5 font-mono text-xs">
		<span class="font-medium text-accent">$</span>
		<span class="text-muted">whoami</span>
	</p>

	<h1 class="mb-4 text-4xl font-medium lg:mb-5 lg:text-6xl">Antonio Farese</h1>

	<p class="text-sm text-muted lg:text-lg">Software developer. Curious by default.</p>

	<div class="mt-3 flex items-center gap-5 text-xs lg:mt-7 lg:text-sm">
		<a href="" class="inline-flex min-h-11 items-center link-underline lg:min-h-0">Email</a>
		<a href="" class="inline-flex min-h-11 items-center link-underline lg:min-h-0">LinkedIn</a>

		<a
			href="https://github.com/nablaFox"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="github profile"
			class="inline-flex min-h-11 items-center gap-2 link-underline lg:hidden"
		>
			GitHub
		</a>
	</div>

	<div class="flex h-full items-center justify-between lg:flex-col lg:items-start">
		<a
			href="https://github.com/nablaFox/dotfiles"
			class="group mt-6 mb-4 block w-fit lg:mt-11"
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

		<LissajousCurve />
	</div>
</aside>
