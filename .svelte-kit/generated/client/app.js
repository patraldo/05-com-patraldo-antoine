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
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [2];

export const dictionary = {
		"/": [4],
		"/acerca": [5],
		"/animaciones": [6],
		"/blog": [7,[2]],
		"/blog/[slug]": [~8,[2,3]],
		"/contacto": [9],
		"/dibujos": [10],
		"/exhibiciones": [11],
		"/gridGallery": [12],
		"/proyecciones": [13],
		"/talleres": [14],
		"/ubicacion": [15],
		"/videos": [16]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';