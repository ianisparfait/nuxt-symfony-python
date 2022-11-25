<template>
  <div class="proj_header">
    <div class="proj_header_left">
      <img :src="require('./../assets/resources/images/Logo.png')" alt="Logo application">
      <h1>RIDE</h1>
    </div>
    <div class="proj_header_right">
      <Button
        :title="'Connexion admin'"
        :isLink="true"
        :hrefLink="'/connexion'"
        :isWhite="false"
        :isExternal="false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Header',
  data() {
    return {
      title: 'Header'
    }
  }
})
</script>
