<template>
    <!-- <button @click="filterVehicles(getFilterValue)">Filter</button> -->
    <b-dropdown variant="outline-success" :text="'Sort by ' + getFilterValue">
        <b-dropdown-item-button v-for="option in ['id', 'name', 'model', 'year', 'price']" :key="option">
            {{option}}
        </b-dropdown-item-button>
    </b-dropdown>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(["getFilterValue"])
    },

    methods: {
        ...mapActions(["filterVehicles", "setFilterValue"])
    },

    mounted() {
        document.querySelectorAll(".dropdown-item").forEach(el => {
            el.addEventListener("click", (event) => {
                this.setFilterValue(event.target.innerHTML)
            })
        })
    }
}
</script>
