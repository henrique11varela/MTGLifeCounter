<script>
import Player from './Player.vue';
export default {
    props: ['numPlayers'],
    data() {
        return {
            GridClass: `PlayerCount${this.numPlayers}`,
            rotationMultiplier: this.rotateSetter(this.numPlayers)
        }
    },
    components: { Player },
    methods: {
        rotateSetter(num) {
            if (num == 1) {
                return [0]
            }
            if (num == 2) {
                return [1, -1]
            }
            if (num == 3) {
                return [2, 0, -1]
            }
            if (num == 4) {
                return [2, 0, 2, 0]
            }
            if (num == 5) {
                return [2, 0, 2, 0, -1]
            }
            return [2, 0, 2, 0, 2, 0]
        }
    }
}
</script>

<template>
    <div class="PlayerGrid" v-bind:class="GridClass">
        <Player v-for="index in Number(numPlayers)" v-bind:player-number="index"
            v-bind:rotation-multiplier="rotationMultiplier[index - 1]" />
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
</style>