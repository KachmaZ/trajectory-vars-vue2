<template>
    <div class="modal-editor_wrapper" v-show="getEditorStatus" @click.stop="onClick($event)">
        <div class="modal-editor p-4">
            Modal
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getEditorStatus'])
    },

    methods: {
        ...mapActions(["setEditorStatus"]),

        onClick(event) {
            if (event.target == document.querySelector('.modal-editor_wrapper')) {
                this.setEditorStatus(false)
            }
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
    height: 500px;

    background-color: #1e2652;
    border-radius: 32px;
}
</style>