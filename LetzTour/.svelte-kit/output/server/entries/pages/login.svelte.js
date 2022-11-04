import { c as create_ssr_component } from "../../immutable/chunks/index-3d9c31de.js";
import { d as dev, b as browser } from "../../immutable/chunks/env-cd3fd664.js";
var login_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}",
  map: null
};
const hydrate = dev;
const router = browser;
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}<meta name="${"description"}" content="${"About this app"}" data-svelte="svelte-1ds1qyu">`, ""}

<div class="${"content svelte-cf77e8"}"><h1>About this app</h1>

	<p>This is a <a href="${"https://kit.svelte.dev"}">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm init svelte</pre>

	<p>The page you&#39;re looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don&#39;t need to load any JavaScript. Try viewing the page&#39;s source, or opening
		the devtools network panel and reloading.
	</p>

	<p>The <a href="${"/todos"}">TODOs</a> page illustrates SvelteKit&#39;s data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
	<h2>Her er en overskrift omkring os</h2>
	<p>Der er mange ting man kan g\xF8re p\xE5 en rejse <a href="${"https://google.com"}">Sport</a> f.eks. Men ud over det er der en h\xE5ndfuld af andre aktiviter som i kan hygge jer med Bajer Wisky se v\xE6rdighedder.<br></p>
	<p>Ud over det er der mange fede ting at lave det her er sku dr\xF8mmen. uden lige bom bom.
	</p>
	<div class="${"gallery-images"}"><img src="${"https://assets.maxroll.gg/wordpress/D2_Amazon.jpg"}" alt="${"content image"}" style="${"width:800px; height:200px"}"></div>

</div>`;
});
export { Login as default, hydrate, router };
