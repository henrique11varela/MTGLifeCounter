<template>
    <div class="w-full h-full" :style="`background-color: rgb(calc(255 / ${playerId}), calc(255 / ${playerId}), calc(255 / ${playerId}));`">
        {{ playerId }}
    </div>
</template>

<script>
    export default {
        props: {
            playerId: Number
        }
    }
</script>

<style scoped>
</style>