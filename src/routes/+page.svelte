<script>
	import GoogleReview from '../components/GoogleReview.svelte';

	const reviews = [
		{
			author: 'Clément Lochet',
			picture: 'https://randomuser.me/api/portraits/men/45.jpg',
			date: '27/03/2024',
			stars: 4,
			text: "J'ai visité Burger Evasion la semaine dernière sur recommandation d'un ami et je n'ai pas été déçu ! Les burgers sont vraiment d'un autre niveau : savoureux, juteux, et les ingrédients sont visiblement de qualité supérieure. J'ai enlevé une étoile simplement parce que l'attente était un peu longue, mais le burger en valait vraiment la peine. Je reviendrai à coup sûr !"
		},
		{
			author: 'Clara Remy',
			picture: 'https://randomuser.me/api/portraits/women/45.jpg',
			date: '04/02/2024',
			stars: 5,
			text: 'Incroyable ! Meilleurs burgers testés, service rapide, équipe au top. Gros coup de cœur pour le Black Chicken, une tuerie ! Ambiance conviviale, parfait pour une soirée entre amis. Vivement la prochaine visite !'
		},
		{
			author: 'Simon Cochinard',
			picture: 'https://randomuser.me/api/portraits/men/7.jpg',
			date: '03/02/2024',
			stars: 4,
			text: "Visite agréable au Burger Fantaisie avec un coup de cœur pour leur Chicken, une merveille de saveurs ! Service chaleureux, déco sympa, mais l'attente était plus longue que prévu. Malgré cela, la qualité des burgers justifie largement une petite patience. Vivement recommandé pour une expérience gourmande qui sort de l'ordinaire."
		},
		{
			author: 'Sophie Garcia',
			picture: 'https://randomuser.me/api/portraits/women/12.jpg',
			date: '05/09/2023',
			stars: 3,
			text: "Burgers corrects mais rien d'extraordinaire. Le service était bien, mais l'attente était assez longue. Bien pour un déjeuner rapide."
		}
	];

	let selectedFaqIndex = null;
	function toggleFaqAnswer(faqIndex) {
		const faqAnswers = document.querySelectorAll('.faq-answer');

		faqAnswers.forEach((faqAnswer, index) => {
			if (index === faqIndex) {
				if (faqAnswer.style.height) {
					faqAnswer.style.height = null;
					selectedFaqIndex = null;
				} else {
					const scrollHeight = faqAnswer.scrollHeight;
					faqAnswer.style.height = scrollHeight + 'px';
					selectedFaqIndex = index;
				}
			} else {
				faqAnswer.style.height = null;
			}
		});
	}

	const faqs = [
		{
			question: 'Est-il possible de venir sans avoir réservé ?',
			answer:
				"Il est tout à fait possible de venir sans avoir réservé ! Gardez cependant à l'esprit qu'il est possible que nous soyons complets le jour de votre visite. Il est donc tout de même conseillé de réserver à l'avance."
		},
		{
			question: "J'ai l'impression que ce restaurant n'existe pas. C'est une arnaque ?",
			answer:
				"Pas du tout ! Cependant, effectivement, Burger Evasion n'existe pas (du moins ce site n'est pas là pour le promouvoir). Vous êtes ici sur un site de démonstration créé par Luc Arnould. Je suis un développeur fullstack freelance et ce site fait partie de mes réalisations personnelles. Les images et logos ont été généré via Dall-E puis édités sur Photopea."
		},
		{
			question: "J'ai oublié un effet personnel, je peux le récupérer ?",
			answer:
				"Si par chance votre bien a été rapporté à la direction, vous pouvez venir le rechercher directement au restaurant pendant les heures d'ouverture."
		},
		{
			question: 'Faîtes vous des évènements (anniversaires, team buildings, ...) ?',
			answer:
				"En pratique, c'est possible ! Il vous suffit simplement de nous appeler au préalable pour parler de votre projet puis nous verrons ce que nous pouvons faire. Un gâteau-burger avec une bougie, y'a de l'idée non ?"
		},
		{
			question:
				'Votre établissement est-il accessible pour les personnes à mobilité réduite (PMR) ?',
			answer:
				'Évidemment ! Chez nous, pas de discrimination, tout le monde est le.la bienvenu.e et peut venir se régaler en toute tranquilité ! :)'
		},
		{
			question: 'Vos viandes sont-elles Halal ?',
			answer: 'Toutes nos viandes sont Halal et accessibles à tous.'
		},
		{
			question: 'Vos burgers sont-ils faits-maison ?',
			answer:
				"Oui. Nous travaillons activement à vous fournir un repas de la plus pure qualité qu'il soit. Nos pains buns sont des pains boulanger faits par un artisan local le matin-même. Nos viandes sont d'origine française et nos légumes proviennent également de producteurs locaux. Soyez certains de ne manger que du frais chez nous !"
		}
	];
</script>

<main>
	<div class="main-container">
		<section class="main-section deep-1">
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
		<section class="chicken-burger-section deep-1">
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
		<section class="beef-burger-section deep-1">
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
		<section class="black-burger-section deep-1">
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
		<section class="feedback-section deep-1">
			<h2>Votre avis compte.</h2>
			<div class="feedback-list">
				{#each reviews as { author, date, picture, stars, text }}
					<GoogleReview {author} {date} {picture} {stars} {text} />
				{/each}
			</div>
		</section>
		<section style="width: 100%; position: relative; margin-top: 3rem">
			<img class="map-section-background" src="map-background.webp" alt="" />
			<div class="map-section deep-1">
				<h2>Nous trouver.</h2>
				<div class="map-container">
					<iframe
						title="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1560.8286002551963!2d2.2939582746944756!3d48.85839441372228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1712173213645!5m2!1sfr!2sfr"
						width="800"
						height="450"
						style="border:0; margin:1rem"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</section>
		<section class="faq-section">
			<div class="faq-container deep-1">
				<div class="faq-title">
					<h2>Les questions fréquentes</h2>
					<p>
						Vous-vous posez des questions quant à notre établissement ? C'est normal ! Et il est
						d'ailleurs probable que d'autres avant vous aient eu les même interrogations.
					</p>
					<p>
						Vous trouverez peut-être dans la section suivante une ou plusieurs réponses. Si vous ne
						trouvez pas votre bonheur vous pouvez toujours nous les poser directement !
					</p>
					<button class="btn btn-primary">Nous contacter</button>
				</div>
				<ul class="faq-list">
					{#each faqs as faq, index}
						<li class="faq-accordion on">
							<div class="faq-question" on:click={() => toggleFaqAnswer(index)}>
								<h3 style={selectedFaqIndex === index ? 'color: white;' : ''}>{faq.question}</h3>
								<p>+</p>
							</div>
							<div class="faq-answer">
								<p>{faq.answer}</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</section>
	</div>
</main>

<style>
	.main-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2rem;
		overflow: hidden;
	}

	.deep-1 {
		max-width: 100rem;
		padding-inline: 5rem;
	}

	.main-section {
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

	.feedback-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-image: url(back-bugir.png);
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: auto 75%;
	}

	.feedback-section h2 {
		font-size: 5rem;
		font-weight: 600;
		color: rgb(234, 234, 234);
	}

	.feedback-list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		align-items: start;
		margin-top: 3rem;
		gap: 2rem;
	}

	.map-section {
		position: relative;
		margin-top: 1rem;
		margin-bottom: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.map-section h2 {
		font-size: 5rem;
		font-weight: 600;
		color: rgb(234, 234, 234);
	}

	.map-container {
		position: relative;
		display: flex;
		justify-content: center;
		width: 100vw;
	}

	.map-section-background {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		object-fit: cover;
		object-position: center;
		z-index: -1;
		width: 100%;
		height: 100%;
	}

	.faq-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-image: url(back-bugir.png);
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: auto 75%;
	}

	.faq-title {
	}

	.faq-title h2 {
		font-size: 5rem;
		font-weight: 600;
		color: rgb(234, 234, 234);
	}

	.faq-title p {
		font-size: 1rem;
		color: rgb(234, 234, 234);
		margin-top: 1.5rem;
	}

	.faq-container {
		margin-top: 3rem;
		margin-bottom: 3rem;
		grid-column-gap: 5rem;
		grid-row-gap: 4rem;
		grid-template-rows: auto;
		grid-template-columns: 0.75fr 1fr;
		grid-auto-columns: 1fr;
		align-items: start;
		display: grid;
	}

	.faq-list {
		display: flex;
		flex-direction: column;
	}

	.faq-accordion {
		display: flex;
		flex-direction: column;
		color: white;
	}

	.faq-question {
		cursor: pointer;
		justify-content: space-between;
		align-items: flex-start;
		padding-top: 1rem;
		padding-bottom: 1rem;
		display: flex;
	}

	.faq-answer {
		overflow: hidden;
		height: 0;
		width: 100%;
		transition: height 0.3s ease-in-out;
	}

	.faq-question h3 {
		color: rgb(190, 190, 190);
		font-size: 1.5rem;
		transition: color 0.3s ease-in-out;
	}

	.faq-question p {
		color: rgb(190, 190, 190);
		font-size: 1.5rem;
	}

	.faq-answer p {
		color: rgb(190, 190, 190);
		font-size: 1rem;
	}
</style>
