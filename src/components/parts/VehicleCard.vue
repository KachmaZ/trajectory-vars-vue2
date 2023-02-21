<template>
    <div class="wrapper col-12 col-sm-6 col-lg-4 p-2">
        <div class="vehicle-card p-4">
            <h2 class="vehicle-card_title">{{ vehicle.name }} {{ vehicle.model }}</h2>
            <h4 class="vehicle-card_subtitle"> {{ vehicle.year }} </h4>
            <div class="vehicle-card_color">
                <div class="vehicle-card_color__name">Color: {{ vehicle.color }}</div>
                <div class="vehicle-card_color__circle" :style="{backgroundColor: vehicle.color}"></div>
            </div>
            <div class="vehicle-card_price mb-3">Price: {{ vehicle.price }}</div>
            <div class="vehicle-card_btns">
                <b-button variant="danger" @click="delVehicle(vehicle.id)">Delete</b-button>
                <b-button variant="warning" @click="setEditorStatus(true)">Edit</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
    props: {
        vehicle: Object
    },
    methods: {
        ...mapActions(["delVehicle", "setEditorStatus"]),
    }
}
</script>

<style lang="scss">
.vehicle-card {
    height: 100%;
    background-color: #121a46;

    border: 1px solid #d0d326;
    border-radius: 30px;

    // &_title {
    // }
    transition: ease-in 200ms;

    &:hover {
        background-color: #1e2652;
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

    &_btns {
        display: flex;
        justify-content: space-between;
        .btn {
            width: 100px;
        }
    }
}
</style>