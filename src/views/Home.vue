<template>
  <div class="home">
   <Navbar />
   <div id="body-container">
<div class="body-img">
			<img src="../assets/cats.jpg" alt="Cats" height="670" width="1167">
</body>
<div class="section">
			<p class="bold">VÄLJAKUTSED</p>
			<p>TEL 5046102</p>
			<p class="bold">KONTAKT</p>
		<ul class="kontaktandmed">
			<li>RAJA 18</li>
			<li>TARTU 50405</li>
			<li>TEL 5046107</li>
			<li>E-MAIL</li>
			<li>varjupaik@tartu.ee</li>
		</ul>
			<p class="bold">LAHTIOLEKUAEG</p>
		<table>
			<tr>
				<td>E - R</td>
				<td>9 - 18</td>
			</tr>
			<tr>
				<td>L - P</td>
				<td>12 - 20</td>
			</tr>
		</table>
</div>
</div>
</div>

<h2>TÄNA VARJUPAIGAS</h2>

<div id="section-container">
<div class="täna-varjupaigas">
	<section class="picture-gallery">
	<figure class="picture">
		<h3 id="koerad-varjupaigas">30 KOERA</h3>

		<h3 id="kassid-varjupaigas">30 KASSI</h3>

		<h3 id="muud-loomad">12 MUUD LOOMA</h3>
		</figure>
	</section>
</div>
</div>


   <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
#koerad-varjupaigas {
	background: url("../assets/dog.jpg");
	padding-top: 275px;
	padding-bottom: 25px;
	background-size: 500px auto;
	background-position: center;
	width: 500px;
}

#kassid-varjupaigas {
	background: url("../assets/kass.jpg");
	padding-top: 275px;
	padding-bottom: 25px;
	background-size: 500px auto;
	background-position: center;
	width: 500px;
}

#muud-loomad {
	background: url("../assets/merisiga.jpg");
	padding-top: 275px;
	padding-bottom: 25px;
	background-size: 500px auto;
	background-position: center;
	width: 500px;
}
</style>
