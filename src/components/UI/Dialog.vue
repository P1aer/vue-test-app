<template>
    <div class="dialog" v-if="show === true" @click="hideDialog">
        <div @click.stop class="dialog-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dialog",
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods : {
            hideDialog() {
                this.$emit("update:show",false)
            }
        }
    }
</script>

<style lang="scss" scoped>
.dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.4);
    position: fixed;
    display: flex;
    &-body {
        padding: 1.3rem;
        margin: auto;
        background: white;
        border-radius: .75rem;
        min-height: 80px;
        min-width: 320px;
    }
}
</style>