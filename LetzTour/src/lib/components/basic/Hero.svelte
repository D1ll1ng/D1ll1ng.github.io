<div class="hero">
	<div class="hero-bg">
		<img src="/media/dublin-cover.webp" alt="">
	</div>
		<h1>Klar på en fantastisk heretur?</h1>
		<p>Søg her og få forslag på hereture… Tilpas din søgning og lav der perfekt til din gruppe</p>
		<form action="post">
			<div class="HeroformfirstRow" >
				<input type="input" name="lokation" id="">
				<input type="date" name="Dato" id="">
				<input type="input" name="Antal personer" id="">
				<input type="search" name="søg" id="">
				<br/><br/>
			</div>
			<div class="HeroformSecondRow" >
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
		margin-top: 0;
		padding: 20px 0;
	}
	.hero form {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		
	}
	.HeroformfirstRow{
		width: 100%;
	}
	.HeroformSecondRow{
		width: 100%;
	}
</style>
