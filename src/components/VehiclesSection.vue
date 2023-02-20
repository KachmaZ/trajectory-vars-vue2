<template>
    <div class="vehicles">
        <VehicleAddButton />
        <VehiclesGrid />
    </div>
</template>

<script>
import VehicleAddButton from './parts/VehicleAddButton.vue';
import VehiclesGrid from './VehiclesGrid.vue';

export default {
    components: {
        VehicleAddButton,
        VehiclesGrid
    }
}
</script>

<style lang="scss">

</style>