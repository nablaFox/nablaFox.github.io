<script>
	import ArrowIcon from '#lib/components/ArrowIcon.svelte'
	import LissajousCurve from '#lib/components/LissajousCurve.svelte'
</script>

<aside
	aria-labelledby="profile-name"
	class="flex flex-col px-5 pt-8 lg:sticky lg:top-(--header-height) lg:h-[calc(100dvh-var(--header-height))] lg:self-start lg:border-r lg:p-20"
>
	<p class="mb-4.5 font-mono text-xs">
		<span aria-hidden="true" class="font-medium text-accent">$</span>
		<span class="text-muted">whoami</span>
	</p>

	<h1 id="profile-name" class="text-4xl font-medium lg:text-6xl">Antonio Farese</h1>

	<div class="flex items-center gap-5 text-xs lg:mt-2 lg:text-sm">
		<a
			href="mailto:hey@antof.dev"
			class="inline-flex min-h-11 items-center link-underline lg:min-h-0">hey@antof.dev</a
		>

		<span class="inline-flex min-h-11 items-center link-underline lg:min-h-0">LinkedIn</span>

		<a
			href="https://github.com/nablaFox"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="GitHub profile (opens in a new tab)"
			class="inline-flex min-h-11 items-center link-underline"
		>
			GitHub
		</a>
	</div>

	<p class="mt-3 text-sm text-muted lg:mt-6 lg:text-lg">
		hello world, I like math and making things with code;
	</p>

	<div class="flex h-full items-center justify-between lg:flex-col lg:items-start">
		<a
			href="https://github.com/nablaFox/dotfiles"
			class="group mt-6 mb-4 block w-fit lg:mt-11"
			aria-label="~/.config: Arch Linux dotfiles on GitHub (opens in a new tab)"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="mb-0.5 flex items-center gap-2 font-mono text-xs text-muted">
				<span class="font-medium text-accent">$</span>
				<span>ls</span>
				<span class="text-fg link-underline">~/.config</span>
				<ArrowIcon size={12} />
			</div>

			<span class="font-mono text-xs text-quiet"># my arch 🍚</span>
		</a>

		<LissajousCurve />
	</div>
</aside>
