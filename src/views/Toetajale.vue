<template>
  <div class="about">
   <Navbar />
   
<div class="section">
   <div class="tekstiosa">
    <p>Meie tegevust toetab töötasude ja üldkulude osas kohalik omavalitsus.
    <br>
    <br>
    Loomade eest hoolitsemine nõuab paljude muude kulude kandmist (toit, ravimid, hooldus- ja puhastusvahendid).
    </p>
    <br>
    <br>
    <p>Annetusi saab teha MTÜ Loomade varjupaik arveldusarvele</p>
    <br>
    <br>
<div class="bold">
    <p>Toeta meie tegevust:
    <br>
    <br>
    MTÜ LOOMADE varjupaik
    <br>
    <br>
    Konto IBAN EE10 2200 22103155 6784</p>
</div>
    <br>
    <br>
    <p>Tule vabatahtlikuks - loomadele teeb rõõmu, kui nendega jalutatakse või aega veedetakse.</p>
</div>

    
<div class="buttons">
    <button type="button">Annetused</button>
    <div class="clearfix"></div>
    <button type="button">Vabatahtlik töö</button>
    <div class="clearfix"></div>
    <button type="button">E-pood</button>
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
  name: 'toetajale',
  components: {
    Navbar,
    Footer,
  },
};
</script>


<style scoped>
    .section {
        width: 100%;
        background-color: #FFF4F4;
        padding: 50px;
        margin-bottom: 30px;
        margin-right: 30px;
        display: flex;
        justify-content: space-between;
    }
    
    p {
        font-size: 20px;
        padding-left: 130px;
        padding-top: 30px;
    }
    
    .buttons {
        float: right;
        margin-top: 50px;
    }
    
    button {
        background-color: #9F2F2F;
        padding: 20px;
        color: white;
        border: 0;
        width: 500px;
        margin-bottom: 50px;
        font-size: 20px;
        text-transform: uppercase;
        text-align: left;
        padding-left: 50px;
    }
    


</style>
