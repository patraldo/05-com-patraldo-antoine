export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [2];

export const dictionary = {
		"/": [4],
		"/animaciones": [5],
		"/blog": [6,[2]],
		"/blog/[slug]": [~7,[2,3]],
		"/contacto": [8],
		"/dibujos": [9],
		"/exhibiciones": [10],
		"/gridGallery": [11],
		"/proyecciones": [12],
		"/talleres": [13],
		"/ubicacion": [14],
		"/videos": [15]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';