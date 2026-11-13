<script lang="ts">
	import ProjectCard from './ProjectCard.svelte'

	import { projects } from './projects'
</script>

<svelte:head>
	<title>Antonio Farese</title>
</svelte:head>

<div class="lg:border-b">
	{#each projects as project (project.name)}
		<ProjectCard {...project} />
	{/each}
</div>
