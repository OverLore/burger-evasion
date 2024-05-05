import { promises as fs } from 'fs';
import path from 'path';

export const prerender = true;

export async function GET() {
	try {
		const filePath = path.resolve('static/carte.json');
		const data = await fs.readFile(filePath, 'utf8');

		return new Response(data, {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: `Failed to fetch carte: Error: ${error}` }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
}
