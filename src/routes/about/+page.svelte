<main class="chalk-background">
	<div class="container deep-1">
		<h1 class="gradient-text">Il est grand temps<br />que nous nous présentions.</h1>
		<div style="margin-left: 25rem; margin-right: 25rem;">
			<h2 class="subtitle">
				Burger Evasion est une expérience unique où vous êtes invité à redécouvrir ce classique
				culinaire qu'est le burger.
			</h2>
		</div>
		<div style="align-self: center;">
			<button class="btn btn-primary"> Consulter la carte </button>
			<button class="btn btn-secondary" style="margin-left: 1rem;"> Nous trouver </button>
		</div>
		<div style="align-self: center;margin-left: 15rem; margin-right: 15rem; margin-top:10rem;">
			<img class="team" src="team.webp" alt="" />
		</div>
		<div class="horizontal">
			<div class="horizontal-content">
				<h2 class="title">Notre histoire</h2>
				<p>
					Tout a commencé en 2019, dans la petite cuisine de notre fondateur, John Doe. Passionné
					par la gastronomie et l'innovation culinaire, John a créé le concept de Burger Evasion
					pour offrir une expérience unique autour du burger. Inspiré par des voyages à travers le
					monde et une envie de réinventer un classique, il a décidé de lancer un restaurant où
					chaque burger raconte une histoire, alliant saveurs traditionnelles et touches exotiques.
					Ce qui distingue Burger Evasion de ses concurrents, c’est son engagement envers la qualité
					et l'originalité.
				</p>
			</div>
			<div class="horizontal-content">
				<img class="team" src="team.webp" alt="" />
			</div>
		</div>
		<div class="horizontal">
			<div class="horizontal-content">
				<img class="team" src="team.webp" alt="" />
			</div>
			<div class="horizontal-content">
				<h2 class="title">Les prémices d'un succès</h2>
				<p>
					John, après une décennie passée dans l'industrie culinaire, et notre co-fondateur Jean,
					expert en gestion, ont uni leurs forces pour transformer une idée en réalité. Notre équipe
					est composée de chefs créatifs, de gestionnaires passionnés et d'un personnel attentif,
					tous dédiés à offrir une expérience mémorable à chaque visite.
				</p>
			</div>
		</div>
		<div class="horizontal">
			<div class="horizontal-content">
				<h2 class="title">En pleine ascention</h2>
				<p>
					Depuis son ouverture, Burger Evasion a surmonté de nombreux défis, notamment l'adaptation
					à la demande croissante pour nos burgers uniques. Nous avons élargi notre menu pour
					inclure des options végétariennes et véganes, répondant ainsi aux besoins divers de nos
					clients. Aujourd'hui, Burger Evasion n'est pas juste un restaurant, c'est une partie
					intégrante de la communauté locale, organisant des événements et soutenant des initiatives
					locales.
				</p>
			</div>
			<div class="horizontal-content">
				<img class="team" src="team.webp" alt="" />
			</div>
		</div>
		<div class="horizontal">
			<div class="horizontal-content">
				<img class="team" src="team.webp" alt="" />
			</div>
			<div class="horizontal-content">
				<h2 class="title">Notre vision</h2>
				<p>
					Notre mission chez Burger Evasion est de révolutionner l’expérience du burger. Nous nous
					efforçons de créer des plats qui non seulement satisfont les papilles, mais qui inspirent
					aussi nos clients. Nous visons à être un leader dans l'innovation culinaire tout en
					maintenant un engagement envers la durabilité. Notre vision pour l'avenir inclut
					l'expansion de notre marque à d'autres villes, en restant toujours fidèles à nos racines
					et en valorisant les ingrédients locaux.
				</p>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		background-color: #1c1c1c;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.team {
		max-width: 100%;
		height: auto;
	}

	.horizontal {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.horizontal-content {
		flex: 0 0 auto;
		width: 46%;
	}

	.container {
		margin-top: 3rem;
		padding-top: 6rem;
		padding-bottom: 4rem;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
	}

	.gradient-text {
		background: var(--primary);
		background: -webkit-linear-gradient(to right, var(--primary), var(--primary-variant));
		background: linear-gradient(to right, var(--primary), var(--primary-variant));
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
	}

	.grid-2-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		width: 100%;
	}

	.grid-img {
		width: 100%;
		height: auto;
	}

	.subtitle {
		margin-top: 1rem;
	}

	.title {
		font-size: 3rem;
	}

	h1,
	h2,
	p,
	a {
		text-align: center;
	}

	h1 {
		color: var(--primary);
		font-size: 5rem;
		display: inline-block;
		margin-bottom: 1rem;
	}

	h2 {
		margin-top: 2rem;
		color: white;
	}

	p {
		margin-top: 0.25rem;
		color: white;
	}

	a {
		color: var(--primary);
	}

	.source {
		margin-top: 4rem;
	}

	.back {
		margin-top: 1rem;
	}
</style>
