import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ARA',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css'
			],			
			social: {
				github: 'https://github.com/sage-code/ara',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
						{ label: 'Contribution', link:'/guides/contribution/' },
						{ label: 'MD Markup', link:'/guides/markup/' },
					],
				},
				{
					label: 'Structures',
					// Autogenerate a group of links
					autogenerate: { directory: 'structures' },
				},
				{
					label: 'Algorithms',
					// Autogenerate a group of links
					autogenerate: { directory: 'algorithms' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
