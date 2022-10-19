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
	import SingleView from '$lib/components/basic/SingleView.svelte';
	export let counterData: Partial<Count>;
</script>

<svelte:head>
	<title>Forside</title>
	<meta name="description" content="Herre tur hjemmeside" />
</svelte:head>

<Hero/>

<section>
	<div class="container">	
		<h2>
			<span class="headline">Herre tur -</span> Vores testede ture!
		</h2>
	</div>

	<div class="ProductOverview">
		<div class="ProductOverview-FirstRow">
			<a href="http://" rel="noopener noreferrer"><span><b>Danmark</b> - København</span></a>
			<a href="http://" rel="noopener noreferrer" style="border-radius: 0 80px 0 0;"><span><b>Irland</b> - Dublin</span></a>
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

<SingleView/>

<section class="testimonial">
	<p>"build our style. Learn how to use these documentation 
		pages in combination with Framer to start building 
		new projects in no-time."</p>
		<span>
			<img loading="lazy" style="width:50px; height:50px; padding: 0 15px 0 0;" src="/media/dublin-square02.webp" alt="et billede af Jens Jensen, man kan se han er en kraftig mand">
			<p>Jens Jensen <br> En kraftig mand</p>
		</span>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		padding: 40px;
		margin: 40px 0;
	}
	h2 {
		display: block;
		font-size: 1em;
		color: #3A798C;
		font-weight: 500;
		float: left;
		width: 100%;
	}
	.container{
		max-width: 905px;
		width: 100%;
	}
	.container span{
		margin-bottom: 5px;
	}
	span.headline {
		font-size: 2em;
		font-weight: 700;
		padding-right: 8px;
	}
	.ProductOverview-FirstRow,.ProductOverview-SecondRow{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
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
		width: 48.5%;
		height: 300px;
		min-width: 450px;
		margin: .2em;
	}
	.ProductOverview-FirstRow a:nth-child(1){

		background-image: url("../media/dublin-square01.webp");
		background-size: cover;
	}
	.ProductOverview-FirstRow a:nth-child(2){

		background-image: url("../media/dublin-square01.webp");
		background-size: cover;
	}
	.ProductOverview-SecondRow a{
		display: block;
		object-fit: cover;
		object-position: bottom;
		text-decoration: none;
		width: 30%;
		height: 250px;
		min-width: 298px;
		margin: .2em;
	}
	.ProductOverview-SecondRow a:nth-child(1){
		background-image: url("../media/dublin-square01.webp");
		background-size: cover;
	}
	.ProductOverview-SecondRow a:nth-child(2){
		background-image: url("../media/dublin-square01.webp");
		background-size: cover;
	}
	.ProductOverview-SecondRow a:nth-child(3){
		background-image: url("../media/dublin-square01.webp");
		background-size: cover;
	}
	.testimonial{
		display: flex;
		max-width: 500px;
		font-size: 1.4em;
		align-items: flex-start;
		margin: 40px auto;
	}
	.testimonial span{
		display: flex;
		font-size: 1rem;
		color: rgb(40, 40, 40);
		margin-top: 20px;
	}
	.testimonial p{
		margin: 0;
	}

	
</style>
