<template>
  <div id="app">
    <VehiclesGrid />
    <YandexMap />
  </div>
</template>

<script>
import YandexMap from './components/YandexMap.vue'
import VehiclesGrid from './components/VehiclesGrid.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    YandexMap,
    VehiclesGrid
  },

  methods: {
    ...mapActions(["fetchAll"])
  },

  async mounted() {
    this.fetchAll();
  },
}
</script>

<style>
</style>
