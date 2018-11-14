<template>
  <div class="about">
   <Navbar />
   <h2>6472      KOER MUKI </h2>
   <img src="../assets/dog.jpg" alt="koer" height="670" width=auto>
   <div class="section">
      <ul>
        <li>isane</li>
        <li>5 aastane</li>
        <li>segavereline</li>
        <li>kastreeritud</li>
        <li>Parasiidivaba</li>
        <li>sõbralik, Kuuletub</li>
        <li>omanik teadmata</li>
        <li>varjupaigas 2 nädalat</li>
      </ul>
   </div>
   <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'tana',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
    h2 {
        padding: 50px 50px 50px 200px;
    }
    img {
        margin-left: 200px;
        margin-bottom: 100px;
        border-radius: 50px;
        height: 584px;
    }
    .section {
        background-color: transparent;
    }
    .section ul {
        list-style: none;
    }
    .section li {
        text-transform: uppercase;
        font-weight: bold;
        padding: 15px;
    }
</style>
