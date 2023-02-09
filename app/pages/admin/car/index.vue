<template>
  <div class="container_page proj_admin">
    <div class="cars" v-if="!loading">
      <ButtonSample
        :title="'AJouter une voiture'"
        :isLink="false"
        :isWhite="false"
        :isLoader="false"
        @click.native="addUser = !addUser"
      />
      <table v-if="cars.length > 0">
        <thead>
          <tr>
            <th v-for="(header, idx) in headers" :key="idx">
              <span>{{header}}</span>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr @click="$router.push({path: `/admin/car/${car.id}`})" v-for="(car, idx) in cars" :key="idx">
            <td>{{ car.id }}</td>
            <td>
              <img :src="car.image" alt="">
            </td>
            <td>{{ car.name }}</td>
            <td>{{ car.price }}€</td>
            <td>
              <ButtonSample
                :title="'Modifier'"
                :isLink="false"
                :isWhite="false"
                :isLoader="true"
                :stopLoader="stopLoader"
                @click.native="up = {...car}; addUp = !addUp"
              />
              <ButtonSample
                :title="'Supprimer'"
                :isLink="false"
                :isWhite="false"
                :isLoader="true"
                :stopLoader="stopLoader"
                @click.native="deleteCar(car.id)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal" v-if="addUser">
      <div class="row">
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="carObj.name">
      </div>
      <div class="row">
        <label for="img">Url de l'image</label>
        <input type="text" id="img" v-model="carObj.img">
      </div>
      <div class="row">
        <label for="price">Prix</label>
        <input type="text" id="price" v-model="carObj.price">
      </div>
      <ButtonSample
        :title="'Ajouter la voiture'"
        :isLink="false"
        :isWhite="false"
        :isLoader="true"
        :stopLoader="stopLoader"
        @click.native="postCar"
      />
    </div>
    <div class="up" v-if="addUp">
      <div class="row">
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="up.name">
      </div>
      <div class="row">
        <label for="img">Url de l'image</label>
        <input type="text" id="img" v-model="up.image">
      </div>
      <div class="row">
        <label for="price">Prix</label>
        <input type="text" id="price" v-model="up.price">
      </div>
      <ButtonSample
        :title="'Modifier la voiture'"
        :isLink="false"
        :isWhite="false"
        :isLoader="true"
        :stopLoader="stopLoader"
        @click.native="updateCar(up.id)"
      />
    </div>
    <span v-if="loading" style="color: var(--blueGoogle);" class="loader loading">Chargement... <i class='bx bx-loader-alt'></i></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from "axios";
import { getLocalStorage } from '../../../utils/utils';

import ButtonSample from "storybook/src/lib-components/button-sample.vue";

export default Vue.extend({
  name: 'AdminCar',
  components: {
    ButtonSample,
  },
  data() {
    return {
      title: 'AdminCar',
      cars: [] as any[],
      stopLoader: false,

      carObj: {
        name: "",
        img: "",
        price: "",
      },
      up: {
        id: "",
        name: "",
        image: "",
        price: "",
      },

      addUp: false,

      addUser: false,

      headers: [] as string[],

      loading: true,
    }
  },
  mounted() {
    this.fetch();
    console.log(this.$router);
  },
  methods: {
    setHeaders(): void {
      if (this.cars.length > 0) this.headers = Object.keys(this.cars[0]);
    },
    fetch(): void {
      const url = `http://localhost:8000/api/flask/cars`;
      const isUserConnected = getLocalStorage("accessToken");

      if (isUserConnected) {
        axios.get(url, {
          headers: {
            Authorization: `Bearer ${isUserConnected}`,
          },
        })
        .then((res) => {
          this.cars = res.data;
          this.setHeaders();
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        })
      }
    },
    postCar(): void {
      const url = `http://localhost:8000/api/flask/cars`;
      const isUserConnected = getLocalStorage("accessToken");

      if (isUserConnected) {
        const config = {
          headers: {
            'Authorization': 'Bearer ' + isUserConnected,
          },
        };
        axios.post(url, {name: this.carObj.name, price: this.carObj.price, image: this.carObj.img}, config).then((res: any): void => {
          this.cars = res.data;
          this.stopLoader = true;
          this.addUser = false;
          this.fetch();
        })
        .catch((err) => {
          console.error(err);
          this.stopLoader = true;
          this.addUser = false;
        })
      }
    },
    deleteCar(id: number): void {
      const url = `http://localhost:8000/api/flask/cars/${id}`;
      const isUserConnected = getLocalStorage("accessToken");

      if (isUserConnected) {
        const config = {
          headers: {
            'Authorization': 'Bearer ' + isUserConnected,
          },
        };
        axios.delete(url, config)
        .then((res) => {
          this.fetch();
        })
        .catch((err) => {
          console.error(err);
        })
      }
    },
    updateCar(id: number): void {
      const url = `http://localhost:8000/api/flask/cars/${id}`;
      const isUserConnected = getLocalStorage("accessToken");
      if (isUserConnected) {
        const config = {
          headers: {
            'Authorization': 'Bearer ' + isUserConnected,
          },
        };

        axios.put(url, this.up, config)
        .then((res) => {
          this.fetch();
          this.stopLoader = true;
        })
        .catch((err) => {
          console.error(err);
          this.stopLoader = true;
        })
      }
    },
  }
});
</script>
