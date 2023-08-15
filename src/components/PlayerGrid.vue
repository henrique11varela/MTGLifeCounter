<script>
import Player from './Player.vue';
export default {
    props: ['quantPlayers'],
    data() {
        return {
            GridClass: `PlayerCount${this.quantPlayers}`
        }
    },
    mounted(){
        let gridEl = document.querySelector('.PlayerGrid')
        let gridParentEl = gridEl.parentElement
        let width = gridParentEl.offsetWidth
        let height = gridParentEl.offsetHeight
        console.log(width, height)
        if (height > width) {
            gridEl.style.width = height + "px"
            gridEl.style.height = width + "px"
            // gridEl.style.transform = "rotate(90deg)"
        }
    },
    components: { Player },
}
</script>

<template>
        <div class="PlayerGrid" v-bind:class="GridClass">
            <Player v-for="index in Number(quantPlayers)" v-bind:player-number="index"
            v-bind:quant-players="quantPlayers" />
        </div>
</template>

<style scoped>
.PlayerGrid {
    width: 100%;
    height: 100%;
    display: grid;
}

.PlayerCount1 {
    grid-template-areas:
        "player1";
}

.PlayerCount2 {
    grid-template-areas:
        "player1 player2";
}

.PlayerCount3 {
    grid-template-areas:
        "player1 player3"
        "player2 player3";
}

.PlayerCount4 {
    grid-template-areas:
        "player1 player3"
        "player2 player4";
}

.PlayerCount5 {
    grid-template-areas:
        "player1 player3 player5"
        "player2 player4 player5";
}

.PlayerCount6 {
    grid-template-areas:
        "player1 player3 player5"
        "player2 player4 player6";
}
@media screen and (max-aspect-ratio: 1) {
    .PlayerGrid {
        rotate: 90deg;
    }
}
</style>