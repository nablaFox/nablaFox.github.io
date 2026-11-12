<script lang="ts">
	import ArrowIcon from '#lib/components/ArrowIcon.svelte'
	import GithubIcon from '#lib/components/GithubIcon.svelte'
	import ThemeSwitcher from '#lib/components/ThemeSwitcher.svelte'
	import SectionSwitcher from './SectionSwitcher.svelte'
</script>

<header
	class="
    sticky top-0 z-10 mx-auto hidden h-(--header-height) max-w-7xl grid-cols-[45fr_55fr] border-b bg-bg before:absolute
    before:right-full before:-bottom-px before:w-screen before:border-b lg:grid
    xl:border-r
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
		<SectionSwitcher class="border-r px-8" />

		<ThemeSwitcher
			class="
        flex h-full w-full cursor-pointer items-center
        justify-center hover:bg-hover
        focus-visible:outline-2
        focus-visible:outline-offset-[-5px]
        focus-visible:outline-accent
      "
		/>
	</div>
</header>
