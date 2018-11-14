<template>
 <div>
  <div class="about">
   <Navbar />
   
 <div class="section">
   <div class="tekstiosa">
    <p>Tartu Koduta Loomade Varjupaik on oma olemuselt munitsipaalne
    varjupaik, mis pakub varjupaiga teenust lepingute alusel ka linna 
    ümbritsevatele kohalikele omavalitsustele.
    <br>
    <br>
    Siinsetest alammenüüdest on võimalik leida informatsiooni varjupaiga 
    toimimise erinevate tahkude kohta alates kodanikele ja kohalikele 
    omavalitsustele mõeldud asjaajamisjuhistest kuni lõpetades teabega 
    teiste Eesti varjupaikade kohta.
    </p>
</div>
</div>

    
<div class="buttons">
    <button type="button">Kodanikule</button>
    <div class="clearfix"></div>
    <button type="button">KOV-ile</button>
    <div class="clearfix"></div>
    <button type="button">Varjupaiga töötajad</button>
    <div class="clearfix"></div>
    <button type="button">Statistika</button>
    <div class="clearfix"></div>
    <button type="button">Eutanaasiast</button>
    <div class="clearfix"></div>
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
  name: 'varjupaigast',
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
        width: 200px;
        margin-bottom: 50px;
        font-size: 20px;
        text-transform: uppercase;
        text-align: left;
        padding-left: 50px;
    }

</style>    