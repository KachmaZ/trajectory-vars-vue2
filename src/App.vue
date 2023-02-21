<template>
  <div id="app" class="container">
    <ModalEditor />
    <section class="mt-3 mb-5">
      <VehiclesSection />
    </section>

    <section>
      <YandexMap />
    </section>

  </div>
</template>

<script>
import YandexMap from './components/YandexMap.vue'
import VehiclesSection from './components/VehiclesSection.vue';
import ModalEditor from './components/ModalEditor.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    YandexMap,
    VehiclesSection,
    ModalEditor
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
