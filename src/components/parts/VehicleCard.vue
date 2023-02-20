<template>
    <div class="wrapper col-12 col-sm-6 col-lg-4 p-2">
        <div class="vehicle-card p-4">
            <h2 class="vehicle-card_title">{{ vehicle.name }} {{ vehicle.model }}</h2>
            <h4 class="vehicle-card_subtitle"> {{ vehicle.year }} </h4>
            <div class="vehicle-card_color">
                <div class="vehicle-card_color__name">Color: {{ vehicle.color }}</div>
                <div class="vehicle-card_color__circle" :style="{backgroundColor: vehicle.color}"></div>
            </div>
        <div class="vehicle-card_price">Price: {{ vehicle.price }}</div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        vehicle: Object
    }
}
</script>

<style lang="scss">
.vehicle-card {
    border: 1px solid #d0d326;
    border-radius: 30px;

    &_title {
    }

    &_color {
        display: flex;
        justify-content: space-between;

        &__name {
            text-transform: capitalize;
        }
        &__circle {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
}
</style>