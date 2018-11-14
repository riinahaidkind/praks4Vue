<template>
  <div class="hello">
   <div class="img">
   <router-link to="/">
       <img src="../assets/logo.jpg" alt="logo" height="100" width="100">
   </router-link>
				<p>Loomade varjupaik</p>

		</div>
<div class="navigation-bar">
	<div id="navigation-container">
		<ul class="header">
			<li><a href="täna varjupaigas.html" class="active">Täna varjupaigas</a></li>
			<li><router-link to="/otsin_leidsin">Otsin/leidsin</router-link></li>
			<li><router-link to="/toetajale">Toetajale</router-link></li>
			<li><router-link to="/varjupaigast">Varjupaigast</router-link></li>
		 </ul>
	</div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
