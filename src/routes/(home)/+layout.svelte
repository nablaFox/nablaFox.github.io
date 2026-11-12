<script lang="ts">
	import type { LayoutProps } from './$types'

	import Footer from './Footer.svelte'
	import Header from './Header.svelte'
	import Hero from './Hero.svelte'
	import SectionSwitcher from './SectionSwitcher.svelte'

	let { children }: LayoutProps = $props()
</script>

<Header />

<div
	class="max-w-7xl lg:mx-auto lg:grid lg:min-h-[calc(100dvh-var(--header-height))] lg:grid-cols-[45fr_55fr]"
>
	<Hero />

	<main class="xl:border-r">
		<SectionSwitcher class="px-5 lg:hidden" />

		{@render children()}

		<Footer />
	</main>
</div>
