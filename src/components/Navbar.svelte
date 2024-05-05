<script>
	import { onMount } from 'svelte';

	let opacity = 0;
	let isMenuOpen = false;

	const onScroll = () => {
		opacity = Math.min(0.85, window.scrollY / 250);
	};

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;

		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	onMount(() => {
		onScroll();
		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<nav
	aria-label="Main navigation"
	style="background-color: rgba(10, 10, 10, {opacity});"
	class:menu-open={isMenuOpen}
>
	<div class="main-container">
		<div class="title-container">
			<a aria-label="Aller à l'accueil" href="/" class="title-link">
				<div class="image-mask"></div>
				<strong class="gradient-text">Burger Evasion</strong>
			</a>
		</div>
		<div class="content-wrapper" class:menu-open={isMenuOpen}>
			<div class="link-container">
				<ul class="link-list">
					<li><a aria-label="Aller à l'accueil" href="/">Accueil</a></li>
					<li><a aria-label="Aller sur la page 'A Propos'" href="/about">À propos</a></li>
					<li><a aria-label="Consulter la carte" href="/carte">La carte</a></li>
					<li><a aria-label="Aller à la section foire aux questions" href="/#faq">FAQ</a></li>
				</ul>
			</div>
			<div class="cta-holder">
				<a
					aria-label="Nous trouver géographiquement"
					style="display: inline; text-align: center;"
					class="btn"
					href="/#map">Nous trouver</a
				>
			</div>
		</div>
		<input
			type="checkbox"
			id="hamburger-checkbox"
			class="hamburger-checkbox"
			on:click={toggleMenu}
		/>
		<label for="hamburger-checkbox" class="hamburger" aria-label="Menu">
			<div class="bar"></div>
			<div class="bar"></div>
			<div class="bar"></div>
		</label>
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

	.title-link strong {
		margin-left: 0.25rem;
		padding-top: 2px;
		font-size: 1.25rem;
		font-family: var(--ulagadi-bold);
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

	.content-wrapper {
		display: flex;
		justify-content: space-between;
		flex-grow: 0.5;
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

	.link-list li {
		transition: transform 0.15s ease-in-out;
	}

	.link-list li a {
		color: rgb(234, 234, 234);
		text-decoration: none;
		transition: color 0.15s ease-in-out;
	}

	.link-list li:hover {
		transform: scale(1.15);
	}

	.link-list li:hover a {
		color: white;
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

	.hamburger-checkbox {
		display: none;
	}

	.hamburger {
		display: none;
		right: 1rem;
		border: none;
		background-color: transparent;
		cursor: pointer;
		flex-direction: column;
		justify-content: space-around;
		width: 1rem;
		height: 0.8rem;
		padding: 15px;
		margin: -15px;
	}

	.hamburger .bar {
		height: 2px;
		width: 100%;
		background-color: white;
		transition: all 0.3s ease;
	}

	.hamburger-checkbox:checked + .hamburger .bar:nth-child(1) {
		transform: translateY(4px) rotate(45deg);
	}

	.hamburger-checkbox:checked + .hamburger .bar:nth-child(2) {
		opacity: 0;
	}

	.hamburger-checkbox:checked + .hamburger .bar:nth-child(3) {
		transform: translateY(-4px) rotate(-45deg);
	}

	@media screen and (max-width: 1440px) {
		.main-container {
			margin-inline: 5rem;
		}
	}

	@media screen and (max-width: 1040px) {
		.main-container {
			margin-inline: 2rem;
		}

		.hamburger {
			display: flex;
		}

		.content-wrapper {
			position: fixed;
			top: 0%;
			left: 50%;
			transform: translate(-50%, -100%);
			width: 100vw;
			flex-direction: column;
			display: none;
			display: flex;
			background-color: rgb(19, 19, 19);
			align-items: center;
			transition: transform 0.2s ease-in-out;
			z-index: -1;
			display: flex;
			justify-content: start;
			border-bottom: 3px solid #2f2f2f;
		}

		.content-wrapper.menu-open {
			transform: translate(-50%, 0%);
			align-items: center;
			flex-direction: column;
			-webkit-box-shadow: 0px 0px 25px 13px #000000;
			box-shadow: 0px 0px 25px 13px #000000;
		}

		.link-list {
			align-items: center;
			flex-direction: column;
		}

		.link-container {
			margin-top: 5rem;
		}

		.cta-holder {
			margin-bottom: 2rem;
			width: 100%;
		}

		.btn {
			font-size: 1.5rem;
			border-radius: 1rem;
			margin-left: 2rem;
			margin-right: 2rem;
			display: block !important;
		}
	}
</style>
