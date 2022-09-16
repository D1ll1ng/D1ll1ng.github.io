<script context="module" lang="ts">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm init svelte</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/todos">TODOs</a> page illustrates SvelteKit's data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
	<h2>Her er en overskrift omkring os</h2>
	<p>
		Der er mange ting man kan gøre på en rejse <a href="https://google.com">Sport</a> f.eks. Men ud over det er der en håndfuld af andre aktiviter som i kan hygge jer med Bajer Wisky se værdighedder.<br>
	</p>
	<p>
		Ud over det er der mange fede ting at lave det her er sku drømmen. uden lige bom bom.
	</p>
	<div class="gallery-images"><img src="https://assets.maxroll.gg/wordpress/D2_Amazon.jpg" style="width:800px; height:200px"></div>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
