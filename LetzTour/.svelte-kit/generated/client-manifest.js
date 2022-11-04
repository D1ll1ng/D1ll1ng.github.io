export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../../src/routes/__error.svelte"),
	() => import("../../src/routes/403.svelte"),
	() => import("../../src/routes/book.svelte"),
	() => import("../../src/routes/counter/index.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/kontakt.svelte"),
	() => import("../../src/routes/login.svelte"),
	() => import("../../src/routes/om.svelte"),
	() => import("../../src/routes/todos/index.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"403": [[0, 2], [1]],
	"book": [[0, 3], [1]],
	"counter": [[0, 4], [1]],
	"kontakt": [[0, 6], [1]],
	"login": [[0, 7], [1]],
	"om": [[0, 8], [1]],
	"todos": [[0, 9], [1]]
};