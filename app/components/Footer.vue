<template>
  <div class="proj_footer">
    <div class="proj_footer_top">
      <NuxtLink to="/contact">Contact</NuxtLink>
      <NuxtLink to="/terms">Conditions générales pdf </NuxtLink>
    </div>
    <div class="proj_footer_bottom">
      <span>RIDE {{year}} - Tout droits reservés</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
})
</script>
