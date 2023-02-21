<template>
    <div class="vehicles-grid row g-4">
        <VehicleCard v-for="vehicle in getSortedVehicles" :key="vehicle.id" :vehicle="vehicle" />
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import VehicleCard from "./parts/VehicleCard"

export default {
    computed: {
        ...mapGetters(["getSortedVehicles"]),
    },

    components: {
        VehicleCard,
    }
}
</script>

<style></style>