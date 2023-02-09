<template>
  <div class="container_page">
    <div class="container_content proj_error">
      <span v-if="error.statusCode === 404">Erreur 404</span>
      <span v-else>Une erreur est servenue</span>
      <!--<NuxtLink :to="localePath('index')">Return à l'accueil</NuxtLink>-->
    </div>
  </div>
</template>


<script>
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>