<template>
    <select v-model="modelValue" @change="changeOpt">
        <option disabled value="">Выбери здесь</option>
        <option v-for="opt in options"
                :key="opt.value"
                :value="opt.value"
        >{{opt.name}}</option>
    </select>
</template>

<script>
    export default {
        name: "Selector",
        props: {
            modelValue: {
                type:String
            },
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            changeOpt(event) {
                this.$emit("update:modelValue",event.target.value)
            }
        }
    }
</script>

<style scoped>

</style>