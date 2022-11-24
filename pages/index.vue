<template>
  <div class="container_page proj_home">
    <section class="proj_home_hero">
      <img :src="require('./../assets/resources/images/home/hero.jpg')" alt="3 voitures alignée de la marque Maserrati">
      <div class="proj_home_hero_text">
        <p>
          <span class="arrow">▷</span> Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France
          (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...).
          Notre expérience est à votre service pour répondre à toutes vos demandes
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      
    }
  },
  methods: {
    
  }
})
</script>
