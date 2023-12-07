import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ARA',
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
				label: 'Generators',
				// Autogenerate a group of links for the 'guides' directory.
				autogenerate: { directory: 'generators' },
				},
				{
				label: 'Structures',
				// Autogenerate a group of links for the 'guides' directory.
				autogenerate: { directory: 'structures' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			defaultLocale: 'root', 
			locales: {
				root: {
					label: 'en',
					lang: 'English',
			  },
			},
		}),
	],
});
