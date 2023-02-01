<template>
  <div class="container_page proj_home" :style="isMobile ? '--paddingTop: 120px;' : '--paddingTop: 80px;'">
    <section class="proj_home_hero">
      <img :src="require('./../assets/resources/images/home/hero.jpg')" alt="3 voitures alignée de la marque Maserrati">
      <div :class="isMobile ? 'proj_home_hero_text responsive' : 'proj_home_hero_text'">
        <p>
          <span class="arrow">▷</span> Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France
          (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...).
          Notre expérience est à votre service pour répondre à toutes vos demandes
        </p>
      </div>
    </section>
    <div :class="isMobile ? `proj_form form_register responsive` : 'proj_form form_register' ">
      <h2 class="title">Inscription</h2>
      <div style="margin: 0.5rem 0px;">Je suis:</div>
      <div class="form_row">
        <div class="form_row_item row">
          <input type="radio" name="iam" id="company" value="company" v-model="user.sociality">
          <label for="company">Une entreprise</label>
        </div>
        <div class="form_row_item row">
          <input type="radio" name="iam" id="individual" value="individual" v-model="user.sociality">
          <label for="individual">Un particulier</label>
        </div>
      </div>
      <div class="form_row">
        <div class="form_row_item">
          <label for="name">Nom</label>
          <input type="text" name="name" id="name" v-model="user.name">
        </div>
        <div class="form_row_item">
          <label for="firstname">Prénom</label>
          <input type="text" name="firstname" id="firstname" v-model="user.firstname">
        </div>
      </div>
      <div class="form_row">
        <div class="form_row_item">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model="user.email">
        </div>
        <div class="form_row_item">
          <label for="phone">Téléphone</label>
          <input type="tel" name="phone" id="phone" v-model="user.phone">
        </div>
      </div>
      <div class="form_row">
        <div class="form_row_item">
          <label for="nationality">Nationalité</label>
          <select name="nationality" id="nationality" v-model="user.nationality">
            <option value=""></option>
            <option value="fr">Française</option>
            <option value="su">Suisse</option>
          </select>
        </div>
      </div>
      <div class="form_row start">
        <div class="form_row_item row">
          <input type="checkbox" name="licence" id="licence" v-model="user.isLicenced">
          <label for="licence">J'atteste que je possède un permis de conduire valide</label>
        </div>
      </div>
      <div class="form_row end" @click="validEmail">
        <ButtonSample
          :title="'Demander mon inscription'"
          :isLink="false"
          :isWhite="false"
          :isExternal="false"
          :isLoader="true"
          :stopLoader="stopLoader"
        />
      </div>

      <span style="color: var(--dangerColor);" v-if="errorMessage !== ''">{{errorMessage}}</span>
      <span style="color: var(--okColor);" v-if="successMessage !== ''">{{successMessage}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from "axios";

import User from './../Classes/User';

import { validateEmail } from './../assets/typescript/utils';

import ButtonSample from "storybook/src/lib-components/button-sample.vue";

export default Vue.extend({
  name: 'Home',
  components: {
    ButtonSample,
  },
  data() {
    return {
      isMobile: false,
      errorMessage: "",
      successMessage: "",
      stopLoader: false,
      user: <User>{
        id: Math.round(Date.now()*10/52),
        name: "",
        firstname: "",
        email: "",
        password: "",
        phone: "",
        nationality: "",
        sociality: "",
        isLicenced: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        isVerified: false,
        isBanned: false,
      }
    }
  },
  mounted() {
    this.$nextTick((): void => {
      this.isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
    });
  },
  methods: {
    validEmail(): void {
      if (!validateEmail(this.user["email"])) {
        this.stopLoader = true;
        this.errorMessage = "Entrez une adresse email valide";
      }
      else {
        this.errorMessage = "";

        const url = `http://localhost:8000/api/.back/future-user`;

        axios.post(url, {email: this.user["email"]})
          .then((response: any): void => {
            this.successMessage = "Votre demande d'inscription a bien été prise en compte";
            this.stopLoader = true;
          })
          .catch((error: any): void => {
            this.errorMessage = "Oups, une erreur est survenue";
            this.stopLoader = true;
          });
      }
    },
  }
})
</script>
