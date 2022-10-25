<div class="hero">
	<div class="hero-bg">
		<img src="/media/dublin-cover.webp" alt="">
	</div>
		<h1>Klar på en fantastisk heretur?</h1>
		<p>Søg her og få forslag på hereture… Tilpas din søgning og lav der perfekt til din gruppe</p>
		<form action="post">
			<div class="HeroFormInput" >
				<input type="input" name="lokation" id="">
				<input type="date" name="Dato" id="">
				<input type="input" name="Antal personer" id="">
				<input type="search" name="søg" id="">
				<input type="btn" name="Kultu" id="">
				<input type="btn" name="Fest" id="">
				<input type="btn" name="Aktiv" id="">
			</div>
		</form>
</div>

<style>
	.hero{
		position: relative;
		height:480px;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.hero-bg{
		position: absolute;
		height:480px;
		width: 100vw;
		margin:0 auto;
		z-index: -1;
	}
	.hero-bg img{
		position: absolute;
		height:100%;
		width: 100%;
		object-fit: cover;
	}
	.hero h1, .hero p{
		color: white;
		margin: 0;
		padding: 0;
		font-family: 'Fugaz One', cursive;
	}
	.hero h1{
		font-size: 3.2em;
		padding:  90px 0 0 0;
	}
	.hero p{
		font-size: 1.2em;
		padding:  0 0 60px 0;
	}
	.hero form {
		width: 90vw;
		max-width: 900px;
		
	}
	.hero form div{
		display: flex;
		flex-wrap: wrap;
    	justify-content: center;
	}
</style>
