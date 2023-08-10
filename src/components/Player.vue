<script>
export default {
    props: ['playerNumber', 'rotationMultiplier'],
    data() {
        return {
            PlayerNumber: `Player${this.playerNumber}`
        }
    },
    computed: {
        cssVars() {
            return {
                '--rotation': (Number(this.rotationMultiplier) * 90) + "deg"
            }
        }
    }
}
</script>

<template>
    <div class="Player" v-bind:class="PlayerNumber" v-bind:style="cssVars">
        <p>Lorem</p>
    </div>
</template>

<style scoped>
.Player {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* test */
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    background-color: lightblue;
    border: 1px solid red;
    /* rotate: var(--rotation); */
}

.Player1 {
    grid-area: player1;
}

.Player2 {
    grid-area: player2;
}

.Player3 {
    grid-area: player3;
}

.Player4 {
    grid-area: player4;
}

.Player5 {
    grid-area: player5;
}

.Player6 {
    grid-area: player6;
}
</style>