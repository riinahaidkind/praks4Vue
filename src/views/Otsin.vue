<template>
  <div class="about">
   <Navbar />

    <p>Lisa kuulutus</p>
    
 <div class="section"> 
 <div class="button list">
    <ul>
    <li><button type="button">
    <select>
      <option value="kaotatud">Kaotatud</option>
      <option value="leitud">Leitud</option>
    </select>
    </button></li>
    
    <li><button type="button">
    <select>
      <option value="koer">Koer</option>
      <option value="kass">Kass</option>
      <option value="muu">Muu</option>
    </select>
    </button></li>
    
    <li><button type="button">
    <select>
      <option value="nimi">Nimi</option>
      <option value="tõug">Tõug</option>
    </select>
        </button></li>
    
    <li><button type="button">Kiibi number</button></li>
    
    <li><button type="button">Vabas vormis kirjeldus</button></li>
    
    <li><button type="button">
      <select>
      <option value="kaotamise">Kaotamise kuupäev</option>
      <option value="leidmise">Leidmise kuupäev</option>
      </select>
    </button></li>
    </ul>
</div>  
    
<div class="subsection">
     <div style="width:auto;height:670;border:1px solid #000;">       
  
   <form action="/action_page.php">
   
  Select files: <input type="file" name="myFile" multiple><br><br>
    </form>

<input type="submit">

</div>
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
  name: 'otsin',
  components: {
    Navbar,
    Footer,
  },
};
</script>


<style scoped>
    .section {
        width: 100%;
        background-color: #C4C4C4;
        padding: 50px;
        margin-bottom: 30px;
        margin-right: 30px;
        display: flex;
        justify-content: space-between;
    }
    
    .subsection {
        width: auto;
        color: #FEF9F9;
    }
    
    .button list p {
        height: 20px;
        width: 100px;
    }
    
    ul {
        padding-left: 100px;
    }
    
    p {
        font-size: 30px;
        text-transform: uppercase;
        font-weight: bold;
        padding-left: 130px;
        padding-right: 50px;
        padding-top: 30px;
    }
    
    .button list {
        float: right;
        margin-top: 50px;
        margin-left: 60px;
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
