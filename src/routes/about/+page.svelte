<main class="chalk-background">
	<div class="container deep-1">
		<h1 class="gradient-text">Il est grand temps<br />que nous nous présentions.</h1>
		<div class="subtitle-container">
			<h2 class="subtitle">
				Burger Evasion est une expérience unique où vous êtes invité à redécouvrir ce classique
				culinaire qu'est le burger.
			</h2>
		</div>
		<div
			style="align-self: center; display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; margin-top: 3rem;"
		>
			<a aria-label="Consulter la carte" href="/carte" class="btn btn-primary">
				Consulter la carte
			</a>
			<a aria-label="Nous trouver géographiquement" href="/carte" class="btn btn-secondary">
				Nous trouver
			</a>
		</div>
		<div class="negative-anchor">
			<img class="team" src="team.webp" alt="Personnel de Burger Évasion" />
		</div>
		<div class="horizontal" style="margin-top: 8rem;">
			<div class="horizontal-content-wide-s">
				<h2 class="title">Notre histoire</h2>
				<p style="text-align: left;">
					Tout a commencé en 2019, dans la petite cuisine de notre fondateur, John Doe. Passionné
					par la gastronomie et l'innovation culinaire, John a créé le concept de Burger Evasion
					pour offrir une expérience unique autour du burger. Inspiré par des voyages à travers le
					monde et une envie de réinventer un classique, il a décidé de lancer un restaurant où
					chaque burger raconte une histoire, alliant saveurs traditionnelles et touches exotiques.
					Ce qui distingue Burger Evasion de ses concurrents, c’est son engagement envers la qualité
					et l'originalité.<br />John, après une décennie passée dans l'industrie culinaire, et
					notre co-fondateur Jean, expert en gestion, ont uni leurs forces pour transformer une idée
					en réalité. Notre équipe est composée de chefs créatifs, de gestionnaires passionnés et
					d'un personnel attentif, tous dédiés à offrir une expérience mémorable à chaque visite.
				</p>
			</div>
			<div class="horizontal-content-small-s">
				<img class="team" src="story.svg" alt="Flat Design Notre Histoire" />
			</div>
		</div>
		<h2 class="divider-text" style="margin-top: 6rem;">
			Une <span class="gradient-text" style="font-family: var(--ulagadi-bold);">
				redécouverte totale
			</span><br />du burger.
		</h2>
		<div class="anchor">
			<div class="horizontal">
				<div class="horizontal-content-wide">
					<h2 class="title" style="text-align: left;">En pleine ascention</h2>
					<p style="text-align: left;">
						Depuis son ouverture, Burger Evasion a surmonté de nombreux défis, notamment
						l'adaptation à la demande croissante pour nos burgers uniques. Nous avons élargi notre
						carte pour inclure des options végétariennes et véganes, répondant ainsi aux besoins
						divers de nos clients. Aujourd'hui, Burger Evasion n'est pas juste un restaurant, c'est
						une partie intégrante de la communauté locale, organisant des événements et soutenant
						des initiatives locales.
					</p>
				</div>
				<div class="horizontal-content-small"></div>
			</div>
			<div class="horizontal">
				<div class="horizontal-content-small"></div>
				<div class="horizontal-content-wide">
					<h2 class="title" style="text-align: right;">Notre vision</h2>
					<p style="text-align: right;">
						Notre mission chez Burger Evasion est de révolutionner l’expérience du burger. Nous nous
						efforçons de créer des plats qui non seulement satisfont les papilles, mais qui
						inspirent aussi nos clients. Nous visons à être un leader dans l'innovation culinaire
						tout en maintenant un engagement envers la durabilité. Notre vision pour l'avenir inclut
						l'expansion de notre marque à d'autres villes, en restant toujours fidèles à nos racines
						et en valorisant les ingrédients locaux.
					</p>
				</div>
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

	.subtitle-container {
		max-width: 60rem;
		align-self: center;
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

	.horizontal-content-wide {
		flex: 0 0 auto;
		width: 58%;
	}

	.horizontal-content-small {
		flex: 0 0 auto;
		width: 38%;
	}

	.horizontal-content-wide-s {
		flex: 0 0 auto;
		width: 53%;
	}

	.horizontal-content-small-s {
		flex: 0 0 auto;
		width: 43%;
	}

	.anchor {
		position: relative;
		width: fit-content;
		margin-top: 6rem;
		margin-left: 5rem;
		margin-right: 5rem;
	}

	.anchor::before {
		content: url('/anchor.webp');
		position: absolute;
		top: -2.55rem;
		left: -3.25rem;
		bottom: auto;
		right: auto;
		pointer-events: none;
	}

	.anchor::after {
		content: url('/anchor.webp');
		position: absolute;
		bottom: -2.55rem;
		right: -3.25rem;
		top: auto;
		left: auto;
		pointer-events: none;
		transform: scale(-1, -1);
	}

	.negative-anchor {
		position: relative;
		width: fit-content;
		align-self: center;
		margin-left: 10rem;
		margin-right: 10rem;
		margin-top: 10rem;
	}

	.negative-anchor::before {
		content: url('/anchor.webp');
		position: absolute;
		top: auto;
		left: -3.25rem;
		bottom: -2.55rem;
		right: auto;
		pointer-events: none;
		transform: scaleY(-1);
	}

	.negative-anchor::after {
		content: url('/anchor.webp');
		position: absolute;
		top: -2.55rem;
		right: -3.25rem;
		bottom: auto;
		left: auto;
		pointer-events: none;
		transform: scaleX(-1);
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

	.subtitle {
		margin-top: 1rem;
	}

	.divider-text {
		font-size: 4rem;
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
		color: white;
	}

	p {
		margin-top: 0.25rem;
		color: white;
	}

	a {
		color: var(--primary);
	}

	.btn {
		margin-top: 0;
	}

	@media screen and (max-width: 1300px) {
		h1 {
			font-size: 3rem;
		}

		h2 {
			font-size: 1.5rem;
		}

		.subtitle-container {
			max-width: 45rem;
			align-self: center;
		}

		.horizontal-content-small-s {
			flex: 0 0 auto;
			width: 43%;
		}

		.negative-anchor {
			margin-left: 10rem;
			margin-right: 10rem;
			margin-top: 10rem;
		}

		.anchor {
			margin-left: 4rem;
			margin-right: 4rem;
		}

		.anchor::before {
			top: -2rem;
			left: -3rem;
			transform: scale(0.75);
		}

		.anchor::after {
			bottom: -2rem;
			right: -3rem;
			transform: scale(-0.75);
		}
	}

	@media screen and (max-width: 1090px) {
		.subtitle-container {
			max-width: 35rem;
			align-self: center;
		}

		.horizontal-content-small-s {
			flex: 0 0 auto;
			width: 80%;
		}

		.horizontal-content-wide-s {
			flex: 0 0 auto;
			width: 100%;
		}

		.horizontal-content-wide {
			flex: 0 0 auto;
			width: 100%;
		}

		.negative-anchor {
			margin-left: auto;
			margin-right: auto;
			width: 550px;
			margin-top: 10rem;
		}

		.horizontal {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			gap: 3rem;
		}

		.divider-text {
			font-size: 3rem;
		}

		.anchor {
			margin-left: 3rem;
			margin-right: 3rem;
		}
	}

	@media screen and (max-width: 750px) {
		h1 {
			font-size: 2.5rem;
		}

		.subtitle {
			font-size: 1.15rem;
		}

		.subtitle-container {
			max-width: 35rem;
			align-self: center;
		}

		.horizontal-content-small-s {
			flex: 0 0 auto;
			width: 80%;
		}

		.horizontal-content-wide-s {
			flex: 0 0 auto;
			width: 100%;
		}

		.horizontal-content-wide {
			flex: 0 0 auto;
			width: 100%;
		}

		.negative-anchor {
			margin-left: auto;
			margin-right: auto;
			width: 400px;
			margin-top: 5rem;
		}

		.horizontal {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			gap: 3rem;
		}

		.divider-text {
			font-size: 2rem;
		}

		.btn {
			padding: 10px 35px;
			font-size: 1.25rem;
			border-radius: 15px;
			margin-top: 2rem;
		}

		.anchor {
			margin-left: 1rem;
			margin-right: 1rem;
		}
	}

	@media screen and (max-width: 550px) {
		h1 {
			font-size: 2.5rem;
		}

		.title {
			font-size: 2rem;
		}

		.subtitle {
			font-size: 1.15rem;
		}

		.divider-text {
			font-size: 1.5rem;
		}

		.btn {
			padding: 10px 35px;
			font-size: 1.25rem;
			border-radius: 15px;
			margin-top: 2rem;
		}

		.negative-anchor {
			margin-left: 2rem;
			margin-right: 2rem;
			width: auto;
		}
	}
</style>
