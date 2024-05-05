<script>
	export let author = 'John Doe';
	export let picture = 'https://randomuser.me/api/portraits/men/45.jpg';
	export let date = '27/09/2020';
	export let stars = 5;
	export let text = 'Lorem ipsum dolor sit amet.';
</script>

<div class="review-card">
	<div class="profile">
		<img src={picture} alt="Profil de l'utilisateur" class="profile-img" />
	</div>
	<strong class="profile-name">{author}</strong>
	<p class="review-date">{date}</p>
	<div class="rating">
		{#each Array(stars) as _, index (index)}
			<span class="star">&#9733;</span>
		{/each}
		{#each Array(5 - stars) as _, index (index)}
			<span class="star">&#9734;</span>
		{/each}
	</div>
	<p class="review-text">
		{text}
	</p>
	<img src="google.webp" alt="Logo de Google" class="google-icon" />
</div>

<style>
	p {
		font-family: Arial, Helvetica, sans-serif;
	}

	.review-card {
		display: flex;
		flex-direction: column;
		background: #f3f3f3;
		border-radius: 1.5rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 1rem;
		margin-bottom: 10px;
		align-items: center;
		border: solid #a9a9a9 2px;
	}

	.profile-img {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		object-fit: cover;
	}

	.profile-name {
		margin: 0;
		font-size: 1rem;
		color: #161616;
		font-weight: bold;
	}

	.review-date {
		margin: 0;
		font-size: 0.75rem;
		color: #a9a9a9;
		font-weight: 600;
	}

	.rating {
		color: #ffc800;
	}

	.star {
		font-size: 2rem;
	}

	.review-text {
		font-size: 1rem;
		margin-top: 4px;
		font-weight: 500;
		text-align: center;
	}

	.google-icon {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		object-fit: cover;
		margin-top: 1rem;
	}
</style>
