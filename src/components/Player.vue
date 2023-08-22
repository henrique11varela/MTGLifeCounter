<script>
export default {
    props: ['playerNumber', 'quantPlayers'],
    data() {
        return {
        }
    }
}
</script>

<template>
    <div class="Player">
        <p>Lorem</p>
    </div>
</template>

<style scoped>
.Player {
    width: 100%;
    height: 100%;
    /* test */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
}

.innerDiv {
    display: grid;
    place-items: center;
}
</style>