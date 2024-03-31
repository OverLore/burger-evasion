<script></script>

<nav aria-label="Main navigation">
	<div class="main-container">
		<div class="title-container">
			<a href="/" class="title-link">
				<div class="image-mask"></div>
				<h1 class="gradient-text">Burger Evasion</h1>
			</a>
		</div>
		<div>
			<ul class="link-list">
				<li><a href="/about">À propos</a></li>
				<li><a href="/services">Services</a></li>
				<li><a href="/contact">Contact</a></li>
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
	}

	.main-container {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		width: 100%;
		height: 100%;
		margin-inline: 10rem;
	}

	.title-container {
	}

	.title-link {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: inherit;
		font-weight: bold;
		font-size: 1.25rem;
	}

	.title-link img {
		width: 2rem;
	}

	.title-link h1 {
		margin-left: 0.25rem;
		padding-top: 2px;
		font-size: 1.25rem;
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
		display: inline-block;
		width: 2rem;
		height: 2rem;
		background-image: linear-gradient(180deg, var(--primary), var(--primary-variant));
		-webkit-mask-image: url('icon.svg');
		mask-image: url('icon.svg');
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
		color: white;
		text-decoration: none;
	}
</style>
