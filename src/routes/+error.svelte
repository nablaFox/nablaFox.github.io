<script lang="ts">
	import { resolve } from '$app/paths'

	let { error }: { error: App.Error } = $props()

	const heading = $derived(error.status === 404 ? 'Page not found' : 'Something went wrong')
</script>

<svelte:head>
	<title>{error.status} · Antonio Farese</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main aria-labelledby="error-title" class="grid min-h-dvh place-items-center px-5 py-16">
	<div class="w-full max-w-sm">
		<div class="border-corner border-b pb-8">
			<p class="font-mono text-xs text-accent">{error.status}</p>
			<h1 id="error-title" class="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
				{heading}
			</h1>
		</div>

		<a
			href={resolve('/(home)')}
			class="group mt-4 inline-flex min-h-11 items-center gap-2.5 text-sm text-muted"
		>
			<span
				aria-hidden="true"
				class="font-mono group-hover:text-accent group-focus-visible:text-accent">←</span
			>
			<span class="link-underline">Back home</span>
		</a>
	</div>
</main>
