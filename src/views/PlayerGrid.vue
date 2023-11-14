<template>
    <div
        :class="`PlayerCount${quantPlayers}`"
        class="PlayerGrid grid w-full flex-col items-center absolute"
    >
        <div
            v-for="index in quantPlayers"
            :key="index"
            :id="`Player${index}`"
            class="Player w-full h-full"
        >
            <div :ref="`players`" class="w-full h-full">
                <Player :player-id="index" />
            </div>
        </div>
    </div>
</template>

<script>
import Player from "../components/PlayerLife.vue";
import useWebsiteStore from '../store/Website.js'
import { mapActions } from 'pinia'
export default {
    data() {
        return {
            quantPlayers: 5,
        };
    },
    methods: {
        ...mapActions(useWebsiteStore, ['setFullscreen']),
    },
    components: {
        Player,
    },
    created(){
        this.setFullscreen(true)
    },
    mounted() {
        //player rotate
        const feedTape = [
            [90],
            [180, 0],
            [90, -90, 0],
            [90, -90, 90, -90],
            [90, -90, 90, -90, 0],
            [90, -90, 90, -90, 90, -90],
        ];
        
        feedTape[this.quantPlayers - 1].forEach((angle, index) => {
            let player = this.$refs.players[index];
            player.style.transform += ` rotate(${angle}deg)`;
            
            if (angle == 90 || angle == -90) {
                let parent = player.parentElement;
                let heightSpace = parent.offsetHeight;
                let widthSpace = parent.offsetWidth;
                player.style.height = `${widthSpace}px`;
                player.style.width = `${heightSpace}px`;
            }
            
            if (index != this.quantPlayers - 1) {
                player.style.top =
                (player.offsetWidth - player.offsetHeight) / 2 + "px";
                player.style.left =
                (player.offsetHeight - player.offsetWidth) / 2 + "px";
            }
        });
    },
    beforeUnmount(){
        this.setFullscreen(false)
    },
};
</script>

<style scoped>
.PlayerGrid {
    top: 0%;
    bottom: 0%;
}

.PlayerCount1 {
    grid-template-areas: "player1";
}

.PlayerCount2 {
    grid-template-areas:
        "player1"
        "player2";
}

.PlayerCount3 {
    grid-template-areas:
        "player1 player2"
        "player3 player3";
}

.PlayerCount4 {
    grid-template-areas:
        "player1 player2"
        "player3 player4";
}

.PlayerCount5 {
    grid-template-areas:
        "player1 player2"
        "player3 player4"
        "player5 player5";
}

.PlayerCount6 {
    grid-template-areas:
        "player1 player2"
        "player3 player4"
        "player5 player6";
}

.Player {
    position: relative;
}

.Player > div {
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
