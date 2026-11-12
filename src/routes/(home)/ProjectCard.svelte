<script lang="ts">
	import ArrowIcon from '#lib/components/ArrowIcon.svelte'

	let { href, name, year, description, tags, featured } = $props<{
		name: string
		year: string
		description: string
		tags: string[]
		featured: boolean
	}>()
</script>

<a
	class="group block -outline-offset-5 not-first:border-t hover:bg-hover lg:grid lg:grid-cols-[8fr_2fr]"
	rel="noopener noreferrer"
	{href}
>
	<div class="p-5 lg:border-r lg:px-8 lg:py-10">
		<div class="flex items-center gap-2.5">
			<h3 class="text-xl font-medium link-underline decoration-transparent">
				{name}

				{#if featured}
					<svg
						class="inline-block size-2.25 align-super text-accent"
						aria-hidden="true"
						viewBox="0 0 12 12"
						fill="none"
						stroke="currentColor"
						stroke-width="1.1"
						stroke-linecap="round"
					>
						<path d="M6 1v10M1.67 3.5l8.66 5M1.67 8.5l8.66-5"></path>
					</svg>
				{/if}
			</h3>

			<span class="text-quiet">
				<ArrowIcon size={15} />
			</span>
		</div>

		<p class="my-2.5 text-sm text-muted">{description}</p>

		<div class="flex items-center gap-2 font-mono text-xs text-quiet">
			{#each tags as tag (tag)}
				<span>{tag}</span>
				<span>·</span>
			{/each}
			<span>{year}</span>
		</div>
	</div>

	<div class="hidden lg:flex lg:items-center lg:justify-center">
		<span
			aria-hidden="true"
			class="block size-18 bg-accent/70"
			style={`mask: url('/projects/${name.toLowerCase()}.svg') center / contain no-repeat`}
		></span>
	</div>
</a>
