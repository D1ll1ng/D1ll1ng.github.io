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

<section class="singleProduct">
	<div class="col1">
		<h2>
			Dublin Tur
		</h2>
		<p >Her er en kort tisser af vores smeller fede dublin tur!</p> 
		<div class="SingleProductImages-Big">
			<img loading="lazy" style="width:512px; height:512px;" src="/media/dublin-square02.webp" alt="facsade of a nice old building">
		</div>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi id ipsa corporis distinctio? Quibusdam, atque? Sapiente, iste qui. Amet numquam aperiam, beatae alias vero tempore. Expedita molestias autem odit provident!</p>
		<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi id ipsa corporis distinctio? Quibusdam, atque? Sapiente, iste qui. Amet numquam aperiam, beatae alias vero tempore. Expedita molestias autem odit provident!</p>
	</div>
	<div class="col2">
		<div class="SingleProductImages-3Small">
			<img loading="lazy" style="width:312px; height:312px;" src="/media/dublin-square02.webp" alt="facsade of a nice old building">
			<img loading="lazy" style="width:256px; height:256px;" src="/media/dublin-square02.webp" alt="facsade of a nice old building">
			<img loading="lazy" style="width:200px; height:200px;" src="/media/dublin-square02.webp" alt="facsade of a nice old building">
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		padding: 40px;
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

	/*Second element with orange bg*/

	.singleProduct{
		background: linear-gradient(129deg, rgb(225, 198, 60) 0%, rgb(225, 160, 60) 100%);
		display: flex;
		flex-direction: row;
		padding: 40px 0;
	}
	.col1{
		display: flex;
		justify-content: right;
		flex-wrap: wrap;
		width: 29.7vw;
	}
	.col1 img{
		padding-bottom: 40px;
	}
	.col1 h2{
		text-align: right;
		color: white;
		font-size: 4em;
		margin: 40px 20px 0 0;

	}
	.col1 p{
		padding: 0 0 1em 0;
		font-size: 1.2em;
		color: white;
		margin: 0 20px 0 0;
	}
	.col2{
		width: 19vw;
	}
	.col2 .SingleProductImages-3Small{
		display: flex;
		flex-direction: column;
	}
</style>
