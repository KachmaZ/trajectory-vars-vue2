<template>
    <div class="vehicles">
        <div class="vehicles_head">
            <VehiclesFilter />
            <VehicleAddButton />
        </div>
        <VehiclesGrid />
    </div>
</template>

<script>
import VehicleAddButton from './parts/VehicleAddButton.vue';
import VehiclesGrid from './VehiclesGrid.vue';
import VehiclesFilter from './parts/VehiclesFilter.vue';

export default {
    components: {
        VehicleAddButton,
        VehiclesGrid,
        VehiclesFilter,
    }
}
</script>

<style lang="scss">
.vehicles {
    &_head {
        display: flex;
        justify-content: space-between;
    }
}
</style>