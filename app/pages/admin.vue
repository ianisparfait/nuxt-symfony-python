<template>
  <div class="container_page proj_admin">
    {{title}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "Admin",
  data() {
    return {
      title: "Admin"
    };
  }
});
</script>
