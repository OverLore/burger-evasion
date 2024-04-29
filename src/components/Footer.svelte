<footer>
	<div class="container deep-1">
		<div class="content">
			<div class="logo-container">
				<a href="/" class="title-link">
					<div class="image-mask"></div>
					<h4 class="gradient-text">Burger Evasion</h4>
				</a>
				<div
					style="height: 1px; margin-top:0.25rem; margin-bottom: 0.5rem; width:5rem;"
					class="logo-container-line"
				></div>
				<p>
					Burger Evsaion est un restaurant fictif. Le présent site sur lequel vous naviguez est la
					vitrine fictive d'un restaurant n'existant pas, réalisé à des fins d'exercice personnel
					par <a
						class="author-link"
						aria-label="Site personnel de Luc Arnould"
						href="https://www.lucarnould.fr/">Luc Arnould</a
					>. Si vous êtes intéressé par cette réalisation et/ou que vous souhaitez obtenir un devis
					pour la création du site web de votre entreprise,
					<a
						class="author-link"
						aria-label="Contacter Luc Arnould"
						href="mailto:luc.arnould08@gmail.com?subject=Contact depuis burger evasion"
						>contactez-moi</a
					> !
				</p>
			</div>
			<div class="links-container">
				<h4 class="gradient-text">Liens</h4>
				<div
					style="height: 1px; margin-top:0.25rem; margin-bottom: 0.5rem; width:2rem;"
					class="logo-container-line"
				></div>
				<a href="/#map">Nous trouver</a>
				<a href="/#faq">FAQ</a>
				<a href="/menu">Menu</a>
				<a href="https://www.lucarnould.fr/" target="_blank">Portfolio</a>
			</div>
			<div class="social-container">
				<div class="social-list">
					<a href="https://www.linkedin.com/in/luc-arnould/" target="_blank"
						><i class="ri-linkedin-box-fill" aria-label="Linkedin de Luc Arnould"></i></a
					>
					<a href="https://github.com/OverLore/" target="_blank"
						><i class="ri-github-fill" aria-label="GitHub de Luc Arnould"></i></a
					>
					<a href="https://www.instagram.com/lucarnould/" target="_blank"
						><i class="ri-instagram-fill" aria-label="Instagram de Luc Arnould"></i></a
					>
					<a href="https://www.youtube.com/channel/UCYaQhULOHO684SKERsnf9nw" target="_blank"
						><i class="ri-youtube-fill" aria-label="YouTube de Luc Arnould"></i></a
					>
					<a href="https://www.tiktok.com/@_scottii/" target="_blank"
						><i class="ri-tiktok-fill" aria-label="TikTok de Luc Arnould"></i></a
					>
				</div>
			</div>
		</div>
		<div
			class="logo-container-line"
			style="height: 1px; margin-top:0.75rem; margin-bottom: 2rem; width: 100%;"
		></div>
		<div class="legal">
			<div class="legal-content">
				<p>Copyright &copy; 2024 Luc Arnould. Tous droits réservés</p>
				<a href="/mentions-legales">Mentions légales</a>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		position: relative;
		padding-top: 2rem;
		padding-bottom: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-image: url(back-bugir.png);
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: auto 75%;
		background-color: var(--secondary);
	}

	.content {
		display: grid;
		grid-template-columns: 1.5fr 1fr 0.5fr;
		gap: 2rem;
		width: 100%;
	}

	.logo-container {
		display: flex;
		flex-direction: column;
	}

	.logo-container-line {
		background-color: gray;
	}

	.logo-container p {
		color: rgb(234, 234, 234);
		font-size: 0.85rem;
	}

	.author-link {
		color: var(--primary);
	}

	.title-link {
		display: flex;
		text-decoration: none;
		color: inherit;
		font-weight: bold;
		font-size: 1.25rem;
	}

	h4 {
		padding-top: 2px;
		font-size: 1.15rem;
	}

	.gradient-text {
		background-color: var(--primary);
		background-image: linear-gradient(45deg, var(--primary), var(--primary-variant));
		background-size: 100%;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
	}

	.image-mask {
		width: 1.5rem;
		height: 1.5rem;
		background-image: linear-gradient(180deg, var(--primary), var(--primary-variant));
		-webkit-mask-image: url('icon.svg');
		mask-image: url('icon.svg');
		mask-size: cover;
		margin-right: 0.75rem;
	}

	.links-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.links-container a {
		color: rgb(234, 234, 234);
		text-decoration: none;
		font-size: 0.85rem;
	}

	.social-container {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: flex-end;
	}

	.social-list {
		display: flex;
		flex-direction: row;
		gap: 0.25rem;
	}

	.social-list a {
		color: rgb(234, 234, 234);
		text-decoration: none;
		font-size: 1.75rem;
		transition: color 0.15s ease-in-out;
	}

	.social-list a:hover {
		color: var(--primary-variant);
	}

	.legal {
		color: gray;
		font-size: 0.75rem;
		width: 100%;
	}

	.legal-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color: gray;
		font-size: 0.75rem;
		padding-inline: 2rem;
	}

	.legal-content a {
		color: gray;
	}
</style>
