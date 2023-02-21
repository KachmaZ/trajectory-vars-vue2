<!-- Reactive YandexMap component -->
<template>
  <div class="yandex-map">
    <yandex-map :coords="coords" :zoom="zoom" @click="onClick">
      <!-- Reactive markers render -->
      <ymap-marker
        v-for="vehicle in getAllVehicles"
        :key="vehicle.id"
        :coords="[vehicle.latitude, vehicle.longitude]"
        :marker-id="vehicle.id"
        :hint-content="vehicle.name + ' ' + vehicle.model"
      ></ymap-marker>
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    settings: {
      apiKey: "360b7364-84ef-49c8-9916-1d64891bf151",
    },

    coords: [59.93901, 30.31583], // Palace Square, Saint-Petersburg
    zoom: 12,
  }),

  computed: {
    ...mapGetters(["getAllVehicles"]),
  },

  components: { yandexMap, ymapMarker },
};
</script>

<style scoped>
.yandex-map {
  height: 500px;

  margin: 0 auto;
}
.ymap-container {
  width: 100%;
  height: 100%;
}
</style>
