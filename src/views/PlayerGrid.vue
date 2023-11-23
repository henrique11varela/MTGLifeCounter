<template>
    <div :class="`PlayerCount${getQuantPlayers}`"
        class="PlayerGrid grid w-full flex-col items-center absolute overflow-hidden">
        <div v-for="index in getQuantPlayers" :key="index" :id="`Player${index}`" class="Player w-full h-full">
            <div :ref="`players`" class="w-full h-full">
                <Player :player-id="index" />
            </div>
        </div>
        <RouterLink :to="{ name: 'Home' }"
            class="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light p-1 rounded-full aspect-square">
            <img :src="menuSvg" class="h-6" /></RouterLink>
    </div>
</template>

<script>
import menuSvg from "../assets/menu.svg";
import Player from "../components/PlayerLife.vue";
import useWebsiteStore from "../store/Website.js";
import useGameStore from "../store/Game.js";
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
export default {
    data() {
        return {
            menuSvg,
        };
    },
    computed: {
        ...mapState(useGameStore, ["getQuantPlayers"]),
    },
    methods: {
        ...mapActions(useWebsiteStore, ["setFullscreen"]),
    },
    components: {
        Player,
        RouterLink,
    },
    created() {
        this.setFullscreen(true);
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

        feedTape[this.getQuantPlayers - 1].forEach((angle, index) => {
            let player = this.$refs.players[index];
            player.style.transform += ` rotate(${angle}deg)`;

            if (angle == 90 || angle == -90) {
                let parent = player.parentElement;
                let heightSpace = parent.offsetHeight;
                let widthSpace = parent.offsetWidth;
                player.style.height = `${widthSpace}px`;
                player.style.width = `${heightSpace}px`;
            }

            if (
                (index != this.getQuantPlayers - 1 ||
                    !(this.getQuantPlayers % 2) ||
                    this.getQuantPlayers == 1) &&
                this.getQuantPlayers != 2
            ) {
                player.style.top =
                    (player.offsetWidth - player.offsetHeight) / 2 + "px";
                player.style.left =
                    (player.offsetHeight - player.offsetWidth) / 2 + "px";
            }
        });
    },
    beforeUnmount() {
        this.setFullscreen(false);
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
