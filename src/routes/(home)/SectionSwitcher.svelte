<script lang="ts">
	import { resolve } from '$app/paths'
	import { page } from '$app/state'

	const { class: classProp }: { class?: string } = $props()

	const sections = [
		{ route: '/(home)', label: '/projects' },
		{ route: '/(home)/writing', label: '/writing' }
	] as const
</script>

<nav
	aria-label="Main"
	data-sveltekit-reset="false"
	class={['flex items-center gap-6 font-mono text-xs font-semibold', classProp]}
>
	{#each sections as { route, label } (route)}
		{@const active = page.route.id === route}
		<a
			href={resolve(route)}
			aria-current={active ? 'page' : undefined}
			class={[
				'flex min-h-11 items-center',
				'decoration-accent decoration-1 underline-offset-8 transition-colors duration-180',
				'hover:text-fg focus-visible:text-fg',
				{ 'text-fg underline': active, 'text-quiet': !active }
			]}
		>
			{label}
		</a>
	{/each}
</nav>
