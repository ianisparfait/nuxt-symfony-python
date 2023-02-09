<template>
  <div class="proj_admin container_page sample_car">
    <span @click="backHistory" class="return"> <i class="uil uil-arrow-left"></i> Retour</span>
    <div class="datas" v-if="Object.entries(datas).length > 0">
      <img :src="datas.image" style="height: 200px; border-radius: 7px;">
      <h1>{{datas.name}} - {{datas.price}}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from "axios";

import { getLocalStorage } from '../../../utils/utils';
export default Vue.extend({
  name: 'AdminCarSample',
  data() {
    return {
      title: 'AdminCarSample',
      datas: {},
    }
  },
  mounted() {
    this.fetch();
  },
  methods: {
    backHistory(): void {
      this.$router.go(-1);
    },
    fetch(): void {
      const url = `http://localhost:8000/api/flask/cars/${this.$route.params.id}`;
      const isUserConnected = getLocalStorage("accessToken");
      if (isUserConnected) {
        const config = {
          headers: {
            'Authorization': 'Bearer ' + isUserConnected,
          },
        };

        axios.get(url, config)
        .then((res: any): void => {
          this.datas = res.data;
        })
        .catch((err: any): void => {
          console.log(err);
        });
      }
    }
  }
})
</script>
