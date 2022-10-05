<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { getCounterData } from '$lib/components/counter/Counter.svelte';
	export const load: Load = async function load({ fetch, session }) {
		return {
			props: {
				counterData: await getCounterData(fetch, session)
			}
		};
	};
</script>

<script lang="ts">
	import Counter from '$lib/components/counter/Counter.svelte';
	import { session } from '$app/stores';
	import type { Count } from '$lib/models/Count';
	import Hero from '$lib/components/basic/Hero.svelte';
	export let counterData: Partial<Count>;
</script>

<svelte:head>
	<title>Forside</title>
	<meta name="description" content="Herre tur hjemmeside" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>

		
	</h1>

	<Hero/>

	<h2>
		<span class="headline">Herre tur -</span> Vores testede ture!
	</h2>
	<div class="ProductOverview">
		<div class="ProductOverview-FirstRow">
			<a href="http://" rel="noopener noreferrer"><span><b>Danmark</b> - København</span></a>
			<a href="http://" rel="noopener noreferrer"><span><b>Irland</b> - Dublin</span></a>
		</div>
		<div class="ProductOverview-SecondRow">
			<a href="http://" rel="noopener noreferrer"><span><b>Belgien</b> - Lorem</span></a>
			<a href="http://" rel="noopener noreferrer"><span><b>Tyskland</b> - Lorem</span></a>
			<a href="http://" rel="noopener noreferrer"><span><b>Findland</b> - Lorem</span></a>
		</div>
	</div>

	{#if $session.user && counterData}
		<Counter {counterData} />
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
	h1 {
		width: 100%;
		color: #fff;
	}
	h2 {
		display: block;
		font-size: 1em;
		color: #3A798C;
		font-weight: 500;
		text-align: left;
		float: left;
	}
	span.headline {
		font-size: 2em;
		font-weight: 700;
	}
	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}


	.ProductOverview-FirstRow,.ProductOverview-SecondRow{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 5px;
	}
	.ProductOverview-FirstRow a:hover,.ProductOverview-SecondRow a:hover{
		cursor: pointer;
		opacity: 0.5;
		transition: 0.5s;
	}
	.ProductOverview-FirstRow a span,.ProductOverview-SecondRow a span{
		color: #fff;
		position: relative;
		top: 20px;
		left: 20px;
	}
	.ProductOverview-FirstRow a{
		display: block;
		object-fit: cover;
		object-position: bottom;
		text-decoration: none;
		width: 50%;
		height: 250px;
		min-width: 450px;
		background: rgb(19,169,171);
		background: linear-gradient(90deg, rgba(19,169,171,1) 0%, rgba(0,161,255,1) 100%);

	}
	.ProductOverview-SecondRow a{
		display: block;
		object-fit: cover;
		object-position: bottom;
		text-decoration: none;
		width: 33%;
		height: 250px;
		min-width: 300px;
		background: rgb(46,171,19);
		background: linear-gradient(90deg, rgba(46,171,19,1) 0%, rgba(0,255,134,1) 100%);
	}
</style>
