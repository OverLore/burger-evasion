<script>
	import { onMount } from 'svelte';

	export let src = ''; // URL de l'image de fond
	export let containerSelector = ''; // Sélecteur CSS du conteneur
	let objectPositionY = '50%'; // Position initiale au centre

	onMount(() => {
		const container = document.querySelector(containerSelector);
		if (!container) {
			console.error(`Conteneur "${containerSelector}" introuvable.`);
			return;
		}

		let sectionHeight = container.offsetHeight;
		let startOffset = container.offsetTop;
		let windowHeight = window.innerHeight;

		const updateScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY + windowHeight > startOffset && scrollY < startOffset + sectionHeight) {
				const progress = (scrollY + windowHeight - startOffset) / (sectionHeight + windowHeight);
				objectPositionY = `${Math.min(100, progress * 100)}%`;
			} else {
				objectPositionY = '50%'; // Réinitialiser au centre si hors de vue
			}
		};

		const updateOffsets = () => {
			windowHeight = window.innerHeight;
			sectionHeight = container.offsetHeight;
			startOffset = container.offsetTop;
			updateScroll(); // Mise à jour après ajustement
		};

		window.addEventListener('scroll', updateScroll);
		window.addEventListener('resize', updateOffsets);

		return () => {
			window.removeEventListener('scroll', updateScroll);
			window.removeEventListener('resize', updateOffsets);
		};
	});
</script>

<img
	class="parallax-background"
	{src}
	alt="Parallax background"
	style="--objectPositionY: {objectPositionY};"
/>

<style>
	.parallax-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center var(--objectPositionY);
		z-index: -1;
		transition: object-position 0.1s ease-out;
	}
</style>
