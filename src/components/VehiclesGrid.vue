<template>
    <div class="vehicles-grid">
        GRID
        <VehicleCard v-for="vehicle in getAllVehicles" :key="vehicle.id" :vehicle="vehicle" />
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import VehicleCard from "./parts/VehicleCard"

export default {
    computed: {
        ...mapGetters(["getAllVehicles"])
    },

    components: {
        VehicleCard
    }
}
</script>

<style>
</style>