import * as sitemap from 'super-sitemap';
export const prerender = true;

export const GET = async () => {
	return await sitemap.response({
		origin: 'https://burgers.lucarnould.fr'
	});
};
