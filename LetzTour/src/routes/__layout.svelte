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
	import Footer from '$lib/components/footer/Footer.svelte';
	import Auth from '$lib/components/auth/Auth.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<!--<Auth />-->
	<slot /> 
</main>

<Footer/>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
	main {
		font-family: 'Poppins', sans-serif;
		flex-direction: column;
		padding: 1rem;
		width: 100vw;
		max-width: 100vw;
		margin: 0 auto;
		box-sizing: border-box;
		padding: 0;
	}
</style>
