<template>
    <div class="vehicle-card">
        <h2 class="vehicle-card_title">{{ vehicle.name }} {{ vehicle.model }}</h2>
        <h4 class="vehicle-card_subtitle"> {{ vehicle.year }} </h4>
        <div class="vehilce-card_color">
            <div class="vehicle-card_color__name"> {{ vehicle.color }}</div>
            <div class="vehicle-card_color__circle" :style="{color: vehicle.color}">O</div>
        </div>
        <a href="">Find</a>

    </div>
</template>

<script>

export default {
    props: {
        vehicle: Object
    }
}
</script>

<style>
</style>