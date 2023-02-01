<template>
  <div class="container_page proj_admin">
    <table v-if="datas.length > 0">
      <thead>
        <tr v-if="headers.length > 0">
          <th v-for="(header, idx) in headers" :key="idx">
            {{header}}
          </th>
          <th>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, idx) in datas" :key="idx">
          <td>{{row["id"]}}</td>
          <td>{{row["email"]}}</td>
          <td>{{row["nom"]}}</td>
          <td>{{row["prenom"]}}</td>
          <td>{{row["telephone"]}}</td>
          <td>{{row["nationalite"]}}</td>
          <td>
            <span v-if="row['isValid']" class="valid">Valide</span>
            <span v-else-if="!row['isValid']" class="non_valid">Non Valide</span>
          </td>
          <td>
            <ButtonSample
              :title="'Valider l\'utilisateur'"
              :isLink="false"
              :isWhite="false"
              :isLoader="true"
              :stopLoader="stopLoader"
              :class="{disabled: row['isValid']}"
              :disable="row['isValid']"
              @click.native="!row['isValid'] ? validUser(row.id) : stopLoader = true"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <span v-else style="color: var(--blueGoogle);" class="loader loading">Chargement... <i class='bx bx-loader-alt'></i></span>
    <div class="app_snackbar bottom-mid" v-if="snckbar.show" :class="{isSuccess: snckbar.status == 200, isError: snckbar.status == 500}">
      <div class="app_snackbar_wrapper">
        <span class="app_snackbar_wrapper_message">{{ snckbar.text }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from "axios";

import { getLocalStorage } from '../utils/utils';

import ButtonSample from "storybook/src/lib-components/button-sample.vue";

export default Vue.extend({
  name: "Admin",
  components: {
    ButtonSample,
  },
  data() {
    return {
      title: "Admin",
      datas: [] as any[],
      headers: [] as string[],
      stopLoader: false,

      snckbar: {
        show: false,
        text: "",
        status: "",
      },
    };
  },
  mounted() {
    this.getDatas();
  },
  watch: {
    snckbar: {
      handler(oldval, newval) {
        if (this.snckbar.show) {
          setTimeout(() => {
            this.snckbar.show = false;
          }, 3000);
          }
      },
      deep: true,
    },
  },
  methods: {
    setHeaders(): void {
      this.headers = Object.keys(this.datas[0]);
    },
    getDatas(): void {
      const url = `http://localhost:8000/api/.back/future-users`;

      axios.get(url, {
        headers: {
          Authorization: `Bearer ${getLocalStorage("accessToken")}`,
        },
      }).then((res: any): void => {
        this.datas = res.data;
        this.setHeaders();
      }).catch((err: any): void => {
        console.error(err);
      });
    },
    validUser(id: string): void {
      const url = `http://localhost:8000/api/.back/future-user/${id}`;
      const token = getLocalStorage("accessToken");

      const config = {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      };

      axios.post(url, {}, config).then((res: any): void => {
        this.stopLoader = true;
        this.snckbar.show = true;
        this.snckbar.text = "L'utilisateur a été validé avec succès";
        this.snckbar.status = 200;
      }).catch((err: any): void => {
        console.log(err);
        this.stopLoader = true;
        this.snckbar.show = true;
        this.snckbar.text = "Une erreur est survenue";
        this.snckbar.status = 500;
      });
    },
  },
});
</script>
