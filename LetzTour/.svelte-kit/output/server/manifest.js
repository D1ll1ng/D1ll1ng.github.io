export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","media/dublin-cover.webp","media/dublin-square01.webp","media/dublin-square02.webp","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".txt":"text/plain"},
	_: {
		entry: {"file":"immutable/start-7025dc40.js","imports":["immutable/start-7025dc40.js","immutable/chunks/index-c547a399.js","immutable/chunks/index-1323b221.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "403",
				pattern: /^\/403\/?$/,
				names: [],
				types: [],
				path: "/403",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "book",
				pattern: /^\/book\/?$/,
				names: [],
				types: [],
				path: "/book",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "counter",
				pattern: /^\/counter\/?$/,
				names: [],
				types: [],
				path: "/counter",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "kontakt",
				pattern: /^\/kontakt\/?$/,
				names: [],
				types: [],
				path: "/kontakt",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				path: "/login",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "om",
				pattern: /^\/om\/?$/,
				names: [],
				types: [],
				path: "/om",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "todos",
				pattern: /^\/todos\/?$/,
				names: [],
				types: [],
				path: "/todos",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/token",
				pattern: /^\/api\/token\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/api/token.ts.js')
			},
			{
				type: 'endpoint',
				id: "api/data",
				pattern: /^\/api\/data\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/api/data.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
