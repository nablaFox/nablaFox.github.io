<script lang="ts">
	import { resolve } from '$app/paths'
	import { page } from '$app/state'
	import type { PageRouteId } from '$app/types'

	import ArrowIcon from '#lib/components/ArrowIcon.svelte'
	import GithubIcon from '#lib/components/GithubIcon.svelte'

	const links = [
		{ route: '/(home)', label: '/projects' },
		{ route: '/(home)/writing', label: '/writing' }
	] satisfies { route: PageRouteId; label: string }[]
</script>

<header
	class="
    sticky top-0 mx-auto hidden h-(--header-height) max-w-7xl grid-cols-[45fr_55fr] border-b before:absolute before:right-full
    before:-bottom-px before:w-screen before:border-b lg:grid xl:border-r
  "
>
	<div class="flex items-center border-r px-20">
		<a
			aria-label="github profile"
			target="_blank"
			rel="noopener noreferrer"
			class="group inline-flex min-h-11 items-center gap-2.5 text-quiet"
			href="https://github.com/nablaFox"
		>
			<GithubIcon />
			<span class="font-mono text-xs text-fg link-underline decoration-transparent">@nablaFox</span>
			<ArrowIcon size={9} />
		</a>
	</div>

	<div class="grid grid-cols-[8fr_2fr]">
		<nav class="flex items-center gap-4 border-r px-8 text-sm">
			{#each links as { route, label } (route)}
				{@const active = page.route.id === route}

				<a
					href={resolve(route)}
					aria-current={active ? 'page' : undefined}
					class={[
						'ease flex min-h-11 items-center font-mono text-xs font-medium transition-colors duration-180 hover:text-fg focus-visible:text-fg',
						'decoration-accent decoration-1 underline-offset-[6px]',
						{ 'text-fg underline': active, 'text-muted': !active }
					]}
				>
					{label}
				</a>
			{/each}
		</nav>

		<button class="mx-2 flex min-h-12 cursor-pointer items-center justify-center self-center">
			L
		</button>
	</div>
</header>
