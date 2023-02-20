<template>
  <div id="app" class="container">
    <section class="my-5">
      <VehiclesGrid />
    </section>

    <section>
      <YandexMap />
    </section>
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
