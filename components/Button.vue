<template>
  <button v-if="isLink && isLink === false" :class="isWhite === true ? 'proj_btn normal white' : 'proj_btn'">{{title}}</button>
  <a :href="hrefLink" :class="isWhite === true ? 'proj_btn white normal' : 'proj_btn normal'" v-else>{{title}}</a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Button',
  props: {
    title: {
      type: String,
      required: true,
    },
    isLink: {
      type: Boolean,
      required: true,
    },
    hrefLink: {
      type: String,
      required: false,
    },
    isWhite: {
      type: Boolean,
      required: true,
    },
  },
})
</script>
