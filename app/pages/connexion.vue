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
            <ButtonSample
              :title="'Se connecter'"
              :isLink="false"
              :isExternal="false"
              :isWhite="false"
              :isLoader="true"
              :stopLoader="stopLoader"
              @click.native="validEmail"
            />
          </div>
        </div>
        <span v-if="errorMessage !== ''" style="color: var(--dangerColor);">{{errorMessage}}</span>
        <span v-if="successMessage !== ''" style="color: var(--okColor);">{{successMessage}}</span>
        <span v-if="checking" style="color: var(--blueGoogle);" class="loader loading">En cours de vérification de vos droits... <i class='bx bx-loader-alt'></i></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from "axios";

import { validateEmail } from './../assets/typescript/utils';
import { UserLogin } from './../Classes/User';

import { getLocalStorage, setLocalStorage, setupLocalStorage } from "./../utils/utils";

import ButtonSample from "storybook/src/lib-components/button-sample.vue";

export default Vue.extend({
  name: "Connexion",
  components: {
    ButtonSample,
  },
  data() {
    return {
      errorMessage: "",
      successMessage: "",
      checking: false,
      stopLoader: false,
      user: <UserLogin>{
        email: "",
        password: "",
      }
    };
  },
  mounted() {
    this.isConnected();
  },
  methods: {
    validEmail(): void {

      if (!validateEmail(this.user["email"])) {
        this.errorMessage = "Entrez une adresse email valide";
        this.stopLoader = true;
      }
      else {
        this.stopLoader = false;
        this.errorMessage = "";
        this.login();
      }
    },
    login(): void {
      const url = `http://localhost:8000/api/.back/login`;

      axios.post(url, {
        email: this.user.email,
        password: this.user.password,
      })
      .then((response: any): void => {
        this.checkAdmin(response.data.token, response.data.refreshToken, "index");
      })
      .catch((error: any): void => {
        console.log(error);
        this.stopLoader = true;
        this.errorMessage = "Oups, Une erreur est survenue";
      });
    },
    checkAdmin(token: string, refreshToken: string, errorRedirect: string, successRedirect?: string): void {
      const url = `http://localhost:8000/api/.back/user`;

      axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any): void => {
        if (response.data.roles.indexOf("ROLE_SUPER_ADMIN") === -1 && response.data.roles.indexOf("ROLE_ADMIN") === -1) {
          this.$router.push({ name: errorRedirect });
        } else {
          setupLocalStorage();
          setLocalStorage("accessToken", token);
          setLocalStorage("refreshToken", refreshToken);
          this.successMessage = "Vous êtes connecté, re-bonjour admin !";

          if (successRedirect) this.$router.push({ name: successRedirect });
        }
        this.stopLoader = true;
      })
      .catch((error: any): void => {
        console.log(error);
        this.stopLoader = true;
        this.errorMessage = "Oups, Une erreur est survenue";
      });
    },

    isConnected(): void {
      const isUserConnected = getLocalStorage("accessToken");

      if (isUserConnected) {
        this.checking = true;
        this.checkAdmin(getLocalStorage("accessToken"), getLocalStorage("refreshToken"), "index", "admin");
      }
    },

    backHistory(): void {
      this.$router.go(-1);
    },
  },
})
</script>
