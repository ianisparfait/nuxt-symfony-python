<template>
  
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "Connexion",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post("/api/login", {
          email: this.email,
          password: this.password,
        });
        this.$store.commit("setToken", response.data.token);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
})
</script>
