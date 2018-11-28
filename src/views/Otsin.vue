<template>
  <div class="about">
   <Navbar />

    <p>Lisa kuulutus</p>
    
 <div class="section"> 
 <div class="button list">
    <ul>
    <li><button type="button">
    <select class="select-option">
      <option value="kaotatud">Kaotatud</option>
      <option value="leitud">Leitud</option>
    </select>
    </button></li>
    
    <li><button type="button">
    <select class="select-option">
      <option value="koer">Koer</option>
      <option value="kass">Kass</option>
      <option value="muu">Muu</option>
    </select>
    </button></li>
    
    <li><button type="button">
    <input class="select-option" placeholder="Nimi või tõug">
    </button>
    </li>
    
    <li><button type="button">
    <input class="select-option" placeholder= "Kiibi number">
    </button>
    </li>
    
    <li><button type="button">
        <textarea class="select-option" placeholder= "Vabas vormis kirjeldus"></textarea>
    </button>
    </li>
    
    <li><button type="button">
      <input class="select-option" placeholder= "Kaotamise või leidmise kuupäev">
      </button>
      </li>
    </ul>
</div>  
    
<div class="subsection">
     <div style="button">          
  <input type="file" name="myFile" multiple><br><br>
        
</div>

<button type="button">
    <input class="select-option" placeholder= "Teie telefon">
    </button>

    <br>
<button type="button">
    <input class="select-option" placeholder= "Teie e-mail">
    </button>

<br>
<input class="submit" type="submit" value="SAADAN">
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
        list-style-type: none;
    }
    
    p {
        font-size: 30px;
        text-transform: uppercase;
        font-weight: bold;
        padding-left: 130px;
        padding-right: 50px;
        padding-top: 30px;
        color: #000000;
    }
    
    .button list {
        float: right;
        margin-top: 50px;
        margin-left: 60px;
    }
    
    button {
        background-color: #FFF4F4;
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
    
    .select-option {
        padding: 15px;
        width: 100%;
        font-size: 20px;
        text-transform: uppercase;
    }
    
    .input[type=text] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }
    
    .submit {
        background-color: #9F2F2F;
        border: 0;
        padding: 20px;
        color: white;
    }


</style>
