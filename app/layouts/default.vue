<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { resetLocalStorage } from '../utils/utils';

export default Vue.extend({
  name: "Layout",
  mounted() {
    resetLocalStorage();
  },
  watch: {
    $route: {
      handler(newV: any, oldV: any): void {
        resetLocalStorage();
      }
    },
  }
})
</script>
