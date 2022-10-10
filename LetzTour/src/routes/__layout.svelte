<script context="module" lang="ts">
	import { protectedPages } from '$lib/client/constants';
	import { initializeFirebase } from '$lib/client/firebase';
	import { browser } from '$app/env';
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async function load({ session, url }) {
		if (!session.user && protectedPages.has(url.pathname)) {
			// User logged out. Send them home, not the 403 page
			return { redirect: '/', status: 302 };
		}
		if (browser) {
			try {
				initializeFirebase(session.firebaseClientConfig);
			} catch (ex) {
				console.error(ex);
			}
		}

		return {};
	};
</script>

<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Auth from '$lib/components/auth/Auth.svelte';
	import logo from '$lib/components//header/logo.png';
	import '../app.css';
	
</script>

<Header />

<main>
	<!--<Auth />-->
	<slot /> 
</main>

<footer>
	<div class="corner">
		<p>Footer CUNTENTen</p>
	</div>
	<div>
	</div>
	<div class="corner">
				<a sveltekit:prefetch href="/">
			<img src={logo} alt="LetzTour" />
		</a>
	</div>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer a {
	}
	footer {
		display: flex;
		justify-content: space-between;
		--background: rgb(46, 46, 46);
		background: var(--background);
		width: 100vw;
		color: white;
	}
	.corner {
		display: flex;
		justify-content:right;
		margin: 2em;
	}
	.corner a {
		color: white;
		font-weight: bold;
	}
	.corner p {
		display: flex;
		align-items: left;
		justify-content: left;
		width: 100%;
		height: 100%;
		color: white;
	}
	.corner img {
		width: 20em;
		height: 3em;
		object-fit: center;
		justify-content: right;
	}
	a:hover {
		color: var(--accent-color);
	}
	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
