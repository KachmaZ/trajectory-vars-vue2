<template>
    <div class="modal-editor_wrapper" v-show="getEditorStatus" @click.stop="onClick($event)">
        <div class="modal-editor p-4">
            <h2>Edit vehicle card</h2>
            <form @submit.prevent="submitEditVehicle" class="modal-editor_form">
                <label for="name">Name:
                    <input type="text" name="name" required autocomplete="off" :value="getCurrentVehicle.name" />
                </label>
                <label for="model">Model:
                    <input type="text" name="model" required autocomplete="off" :value="getCurrentVehicle.model" />
                </label>
                <label for="year">Year:
                    <input type="number" name="year" required autocomplete="off" :value="getCurrentVehicle.year" />
                </label>
                <label for="color">Color:
                    <input type="text" name="color" required autocomplete="off" :value="getCurrentVehicle.color" />
                </label>
                <label for="price">Price:
                    <input type="number" name="price" required autocomplete="off" :value="getCurrentVehicle.price" />
                </label>
                <label for="latitude">Latitude:
                    <input type="number" step="any" name="latitude" required autocomplete="off"
                        :value="getCurrentVehicle.latitude">
                </label>
                <label for="longitude">Longitude:
                    <input type="number" step="any" name="longitude" required autocomplete="off"
                        :value="getCurrentVehicle.longitude">
                </label>
                <button type="submit" class="mt-3">Edit vehicle</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getEditorStatus', 'getCurrentVehicle'])
    },

    methods: {
        ...mapActions(["setEditorStatus", "editVehicle"]),

        onClick(event) {
            if (event.target == document.querySelector('.modal-editor_wrapper')) {
                this.setEditorStatus(false)
            }
        },

        submitEditVehicle(event) {
            let props = event.target.elements;
            let vehicle = {
                id: this.getCurrentVehicle.id,
                name: props.name.value,
                model: props.model.value,
                year: Number(props.year.value),
                color: props.color.value,
                price: Number(props.price.value),
                latitude: Number(props.latitude.value),
                longitude: Number(props.longitude.value),
            };            

            this.editVehicle(vehicle);
            this.setEditorStatus(false);
        }
    }
}
</script>

<style lang="scss">
.modal-editor {
    &_wrapper {
        width: 100vw;
        height: 100vh;

        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.5);
    }

    width: 500px;

    background-color: #1e2652;
    border-radius: 32px;

    &_form {
        padding: 10px;
        margin-top: 7px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background: #1e233c;

        border: 1px solid grey;
        border-radius: 10px;

        input {
            height: 40px;
            background: inherit;
            border: none;

            color: #d0d326;

            &:focus {
                outline: none;
                border: 1px solid #d0d326;
                border-radius: 5px;
            }
        }

        button {
            position: relative;
            margin-left: auto;
            margin-right: auto;

            width: 120px;

            color: #babd13;

            background: #516087;

            border: none;
            border-radius: 15px;
        }
    }
}
</style>