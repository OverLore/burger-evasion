<script>
	export let category;
	export let items;
</script>

<article>
	<h2 class="category">{category}</h2>
	<ul>
		{#each items as item}
			<li class="presenter">
				<h3 class="name">{item.nom} - {item.prix}</h3>
				<p class="description">{item.description}</p>
			</li>
		{/each}
		<li class="separator"></li>
	</ul>
</article>

<style>
	.category {
		text-align: center;
		margin-bottom: 2rem;
		font-size: 2rem;
		text-decoration: underline 2px;
		color: #ff9448;
	}

	.separator {
		position: relative;
		margin-bottom: 6rem;
		margin-top: 2.5rem;
	}

	.separator::after {
		content: url(/burger-underline.webp);
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		pointer-events: none;
	}

	.name {
		color: #ffb47e;
	}

	.description {
		margin-top: 0.25rem;
		color: white;
		text-wrap: balance;
		max-width: 40rem;
	}

	.presenter {
		margin-bottom: 1rem;
	}

	ul {
		text-align: center;
		list-style-type: none;
	}
</style>
