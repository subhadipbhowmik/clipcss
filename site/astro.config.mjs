import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'clipcss',
			social: {
				github: 'https://github.com/subhadipbhowmik/',
			},
			sidebar: [
				{
					label: 'Documentation',
					slug: 'documentation/introduction',
				},
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
			],
		}),
	],
});
