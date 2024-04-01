<main>
	<div class="main-container">
		<section class="main-section">
			<img class="main-section-background" src="section1burger.webp" alt="" />
			<div class="main-text-grid">
				<div>
					<h2>Goûtez les meilleurs burgers de votre vie.</h2>
					<h3>
						Découvrez des burgers révolutionnaires, avec leur viande juteuse et succulente. Goûtez à
						notre redéfinition de ce classique culinaire d'une manière inédite et inoubliable.
					</h3>
					<button class="btn btn-primary"> Menu </button>
					<button class="btn btn-secondary" style="margin-left: 1rem;"> Nous trouver </button>
				</div>
			</div>
		</section>
		<section class="chicken-burger-section">
			<img class="chicken-burger-image" src="chicken.webp" alt="" />
			<div class="main-text-grid">
				<div>
					<h2>Le Chicken.</h2>
					<h3>
						Dégustez un morceau de poulet pané généreux, bordé de deux buns toastés, agrémenté de
						tomates fraîches, d'oignons rouges caramélisés, cornichons, salade croquante et cheddar
						fondant. <br />Un délice compact en saveurs !
					</h3>
					<button class="btn btn-primary">Découvrir</button>
				</div>
			</div>
		</section>
		<section class="beef-burger-section">
			<img class="beef-burger-image" src="beef.webp" alt="" />
			<div class="main-text-grid">
				<div class="revert-grid">
					<h2>Le Carnivore.</h2>
					<h3>
						Savourez un steak juteux à souhait, niché entre deux buns parfaitement toastés,
						accompagné de tomates fraîches, d'oignons rouges doucement caramélisés, de cornichons
						croquants, de salade fraîche et d'une tranche de cheddar onctueux et fondant. <br />Un
						régal réservé aux vrais carnivores !
					</h3>
					<button class="btn btn-primary">Découvrir</button>
				</div>
			</div>
		</section>
		<section class="black-burger-section">
			<img class="black-burger-image" src="black.webp" alt="" />
			<div class="main-text-grid">
				<div>
					<h2>La gamme Black.</h2>
					<h3>
						Plongez dans l'univers de notre gamme Black avec deux créations audacieuses, où le noir
						élégant du pain encadre parfaitement la richesse des saveurs. Chaque bouchée de nos
						burgers Black vous transporte dans une dimension offrant une harmonie parfaite entre
						texture, arôme, et visuel.<br />Bienvenue dans un monde où le noir révèle les saveurs
						les plus intenses.
					</h3>
					<button class="btn btn-primary">Découvrir</button>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	.main-container {
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
		color: rgb(234, 234, 234);
	}

	.revert-grid {
		grid-column: 2;
		text-align: right;
	}

	.main-text-grid h2 {
		font-size: 5rem;
		font-weight: 600;
	}

	.main-text-grid h3 {
		margin-top: 2rem;
		font-weight: 500;
		font-size: 1.75rem;
	}

	.btn {
		font-weight: 500;
		color: white;
		padding: 20px 60px;
		border: none;
		cursor: pointer;
		font-size: 1.5rem;
		transition: all 0.3s ease-in-out;
		border: solid 2px transparent;
		border-radius: 20px;
		background-origin: border-box;
		margin-top: 3rem;
	}

	.btn:hover {
		box-shadow: 0 0 20px 5px rgba(249, 146, 43, 0.5);
	}

	.btn-primary {
		background-image: linear-gradient(to right, var(--primary), var(--primary-variant));
	}

	.btn-secondary {
		background-color: transparent;
		background-image: linear-gradient(#1e1e22, #1e1e22),
			linear-gradient(to right, var(--primary), var(--primary-variant));
		background-clip: padding-box, border-box;
	}

	.chicken-burger-section {
		height: 100svh;
		position: relative;
	}

	.chicken-burger-image {
		position: absolute;
		z-index: -1;
		height: 90vh;
		top: 5vh;
		left: 25vw;
	}

	.beef-burger-section {
		height: 100svh;
		position: relative;
	}

	.beef-burger-image {
		position: absolute;
		z-index: -1;
		height: 90vh;
		top: 5vh;
		right: 25vw;
	}

	.black-burger-section {
		height: 100svh;
		position: relative;
	}

	.black-burger-image {
		position: absolute;
		z-index: -1;
		height: 90vh;
		top: 5vh;
		left: 25vw;
	}
</style>
