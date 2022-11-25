<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { StorybookSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  StorybookSample,
  // }
});
</script>

<template>
  <div id="app">
    <storybook-sample />
  </div>
</template>
