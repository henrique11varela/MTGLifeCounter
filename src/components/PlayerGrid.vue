<script>
import Player from './Player.vue';
export default {
    props: ['quantPlayers'],
    data() {
        return {

        }
    },
    mounted() {
        // playergrid rotate
        let playerGrid = this.$refs.pg
        let playerGridParent = playerGrid.parentElement
        if (playerGridParent.offsetHeight > playerGridParent.offsetWidth) {
            rotateResizeElement(playerGrid, 90)
        }
        //player rotate
        for (let i = 0; i < this.quantPlayers; i++) {
            let deg = 0
            if (!(i % 2)) {
                deg = 180
                if (i == this.quantPlayers - 1) {
                    deg = -90
                    this.$refs.players[i].style.top = (this.$refs.players[i].offsetHeight - this.$refs.players[i].offsetWidth) / 2 + "px"
                    this.$refs.players[i].style.left = (this.$refs.players[i].offsetWidth - this.$refs.players[i].offsetHeight) / 2 + "px"
                }
            }
            rotateResizeElement(this.$refs.players[i], deg)
        }

    },
    components: { Player },
}
function rotateResizeElement(element, degrees = 0) {
    if (degrees) {
        element.style.transform += ` rotate(${degrees}deg)`
    }
    if (degrees == 90 || degrees == -90) {
        let parent = element.parentElement
        let heightSpace = parent.offsetHeight
        let widthSpace = parent.offsetWidth
        element.style.height = `${widthSpace}px`
        element.style.width = `${heightSpace}px`
    }
}
</script>

<template>
    <div class="outer">
        <div ref="pg" class="PlayerGrid" v-bind:class="`PlayerCount${this.quantPlayers}`">
            <div v-for="player in Number(quantPlayers)" v-bind:id="`Player${player}`" class="Player">
                <div :ref="`players`">
                    <Player />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.outer {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.PlayerGrid {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    background-color: red;
    position: absolute;
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

.Player,
.Player>div {
    height: 100%;
    width: 100%;
}

.Player {
    position: relative;
}

.Player>div {
    position: absolute;
}

#Player1 {
    grid-area: player1;
}

#Player2 {
    grid-area: player2;
}

#Player3 {
    grid-area: player3;
}

#Player4 {
    grid-area: player4;
}

#Player5 {
    grid-area: player5;
}

#Player6 {
    grid-area: player6;
}
</style>