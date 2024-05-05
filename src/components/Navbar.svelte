<script>
	import { onMount } from 'svelte';

	let opacity = 0;

	const onScroll = () => {
		opacity = Math.min(0.85, window.scrollY / 250);
	};

	onMount(() => {
		onScroll();
		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<nav aria-label="Main navigation" style="background-color: rgba(10, 10, 10, {opacity});">
	<div class="main-container">
		<div class="title-container">
			<a href="/" class="title-link">
				<div class="image-mask"></div>
				<strong class="gradient-text" style="font-family: var(--ulagadi-bold); margin-left: 0.5rem;"
					>Burger Evasion</strong
				>
			</a>
		</div>
		<div>
			<ul class="link-list">
				<li><a href="/about">À propos</a></li>
				<li><a href="/carte">La carte</a></li>
				<li><a href="/#faq">FAQ</a></li>
			</ul>
		</div>
		<div>
			<ul class="link-list">
				<li><a style="display: inline;" class="btn" href="/#map">Nous trouver</a></li>
			</ul>
		</div>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		height: 4rem;
		display: flex;
		justify-content: center;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		backdrop-filter: blur(5px);
	}

	.main-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100%;
		margin-inline: 10rem;
	}

	.title-link {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: inherit;
		font-weight: bold;
		font-size: 1.25rem;
	}

	.title-link h1 {
		margin-left: 0.25rem;
		padding-top: 2px;
		font-size: 1.25rem;
	}

	.image-mask {
		display: inline-block;
		width: 2rem;
		height: 2rem;
		background-image: linear-gradient(180deg, var(--primary), var(--primary-variant));
		-webkit-mask-image: url('/icon.svg');
		mask-image: url('/icon.svg');
		mask-size: cover;
	}

	.link-list {
		list-style: none;
		display: flex;
		gap: 3rem;
		margin: 0;
		padding: 0;
		font-size: 1.25rem;
		font-weight: bold;
	}

	.link-list a {
		color: rgb(234, 234, 234);
		text-decoration: none;
	}

	.btn {
		font-weight: 500;
		color: white;
		padding: 0.5rem 2rem;
		border: none;
		cursor: pointer;
		font-size: 1.25rem;
		transition: all 0.3s ease-in-out;
		border: solid 2px transparent;
		border-radius: 10px;
		background-origin: border-box;
		margin-top: 3rem;
		background-image: linear-gradient(to right, var(--primary), var(--primary-variant));
	}

	.btn:hover {
		box-shadow: 0 0 20px 5px rgba(249, 146, 43, 0.5);
	}
</style>
