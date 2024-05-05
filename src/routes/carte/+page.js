export async function load({ fetch }) {
	try {
		const response = await fetch('/api/carte');
		if (response.ok) {
			const carte = await response.json();
			return {
				props: {
					carte: carte,
					loading: false
				}
			};
		} else {
			throw new Error('Failed to load carte');
		}
	} catch (error) {
		console.error('Error loading carte:', error.message);
		return {
			props: {
				carte: {},
				loading: false,
				error: error.message
			}
		};
	}
}
