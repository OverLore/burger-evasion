<main>
	<div class="main-container">
		<section class="main-section">
			<img class="main-section-background" src="section1burger.webp" alt="" />
			<div class="main-text-grid">
				<div>
					<h2>Goûtez les meilleurs burgers de votre vie.</h2>
					<h3>
						Faîtes l'expérience de véritables burgers audacieux à la viande savoureuse et juteuse.
						Venez redécouvrir ce classique de la cuisine comme vous ne l'avez jamais gouté.
					</h3>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	.main-container {
		width: 100%;
		height: 100%;
		margin-inline: 10rem;
	}

	.main-section {
		width: 100vw;
		height: 100svh;
	}

	.main-section-background {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
	}

	.main-text-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		height: 100%;
		align-items: center;
		color: white;
	}

	.main-text-grid h2 {
		font-size: 5rem;
	}

	.main-text-grid h3 {
		margin-top: 2rem;
		font-weight: 500;
		font-size: 1.75rem;
		width: 75%;
	}
</style>
