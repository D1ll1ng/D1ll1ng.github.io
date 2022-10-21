<script lang="ts">
	import { page, session } from '$app/stores';
	import logo from './logo.png';
</script>

<header>
	<div class="container-header">
		<div class="corner">
			<a sveltekit:prefetch href="/">
				<img src={logo} alt="LetzTour" />
			</a>
		</div>
	
		<div>
	
		</div>
	
		<div class="corner">
			<nav>
	
				<ul>
					<li class:active={$page.url.pathname === '/book'}>
						<a sveltekit:prefetch href="/book">Book</a>
					</li>
					<li class:active={$page.url.pathname === '/om'}>
						<a sveltekit:prefetch href="/om">Om</a>
					</li>
					<li class:active={$page.url.pathname === '/kontakt'}>
						<a sveltekit:prefetch href="/kontakt">Kontakt</a>
					</li>
					<li class:active={$page.url.pathname === '/login'}>
						<a sveltekit:prefetch href="/login">Login</a>
					</li>
					{#if $session.user}
						<li class:active={$page.url.pathname === '/counter'}>
							<a sveltekit:prefetch href="/counter">Counter</a>
						</li>
						<li class:active={$page.url.pathname === '/todos'}>
							<a sveltekit:prefetch href="/todos">Todos</a>
						</li>
					{/if}
				</ul>
			</nav>
		</div>
	</div>
</header>

<style>
	header {
		--background: rgba(255, 255, 255, 1);
		background: var(--background);
	}
	.container-header{
		display: flex;
		justify-content: space-between;
		max-width: 1200px;
		margin: 0 auto;
	}
	.corner {
		width: 4em;
		height: 3.5em;
		margin: 1em;
	}
	.corner a {
		display: flex;
		align-items: left;
		justify-content: left;
		width: 100%;
		height: 100%;
	}
	.corner img {
		width: 20em;
		height: 3em;
		object-fit: center;
	}
	nav {
		display: flex;
		justify-content: right;

	}
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: right;
		align-items: right;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}
	li {
		position: relative;
		height: 100%;
	}
	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
