<script>
	import Category from '../../components/Category.svelte';

	export let data;
	const { carte, loading, error } = data.props;

	function oui() {
		console.log(loading);
	}
</script>

<main class="chalk-background">
	<div class="container deep-1">
		<h1 class="gradient-text">Notre carte</h1>
		{#each Object.keys(carte['Menu'] || []) as category}
			<Category {category} items={carte['Menu'][category]} />
		{/each}
	</div>
</main>

<style>
	main {
		background-color: #1c1c1c;
		display: flex;
		align-content: center;
		justify-content: center;
	}

	.container {
		padding-top: 6rem;
		padding-bottom: 4rem;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
	}

	h1,
	p {
		text-align: center;
	}

	h1 {
		color: var(--primary);
		font-size: 5rem;
		display: inline-block;
		margin-bottom: 3rem;
	}

	p {
		margin-top: 0.25rem;
		color: white;
	}
</style>
