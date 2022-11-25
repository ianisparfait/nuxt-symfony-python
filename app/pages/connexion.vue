<template>
  <div class="container_page proj_connexion">
    <div class="wrapper">
      <span @click="backHistory" class="return"> <i class="uil uil-arrow-left"></i> Retour</span>
      <div class="proj_form">
        <div class="form_row full">
          <div class="form_row_item">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="user.email" />
          </div>
        </div>
        <div class="form_row full">
          <div class="form_row_item">
            <label for="password">Mot de passe</label>
            <input type="password" id="password" v-model="user.password" />
          </div>
        </div>
        <div class="form_row full">
          <div class="form_row_item">
            <Button
              :title="'Se connecter'"
              :isLink="false"
              :isExternal="false"
              :isWhite="false"
              @click="validEmail"
            />
          </div>
        </div>
        <span v-if="errorMessage !== ''" style="color: var(--dangerColor);">{{errorMessage}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { validateEmail } from '~/assets/typescript/utils';
import { UserLogin } from '~/Classes/User';

export default Vue.extend({
  name: "Connexion",
  data() {
    return {
      errorMessage: "",
      user: <UserLogin>{
        email: "",
        password: "",
      }
    };
  },
  methods: {
    validEmail(): void {
      if (validateEmail(this.user["email"])) this.errorMessage = "Entrez une adresse email valide";
      else this.errorMessage = "";
    },
    async login() {
      try {
        const response = await this.$axios.post("/api/login", {
          email: this.user["email"],
          password: this.user["password"],
        });
        this.$store.commit("setToken", response.data.token);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    backHistory() {
      this.$router.go(-1);
    },
  },
})
</script>
