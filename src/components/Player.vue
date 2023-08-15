<script>
export default {
    props: ['playerNumber', 'quantPlayers'],
    data() {
        return {
            PlayerNumber: Number(this.playerNumber),
            QuantPlayers: Number(this.quantPlayers),
            PlayerId: `Player${this.playerNumber}`
        }
    },
    mounted(){
        if (this.PlayerNumber == this.QuantPlayers && this.QuantPlayers % 2) {
            let outterElement = document.querySelector(`#${this.PlayerId}`)
            let innerElement = outterElement.querySelector(`.innerDiv`)
            innerElement.style.width = outterElement.style.height + "px"
            innerElement.style.height = outterElement.style.width + "px"
        }
    },
    computed: {
        cssVars() {
            let rotate = "0deg";
            if (this.PlayerNumber % 2) {
                rotate = "180deg"
            }
            else {
                rotate = "0deg"
            }
            if (this.PlayerNumber == this.QuantPlayers && this.QuantPlayers % 2) {
                rotate = "-90deg"
            }
            return {
                '--rotation': rotate
            }
        }
    }
}
</script>

<template>
    <div class="Player" v-bind:id="PlayerId" v-bind:style="cssVars">
        <div class="innerDiv">
            <p>Lorem</p>
        </div>
    </div>
</template>

<style scoped>
.Player {
    width: 100%;
    height: 100%;
    /* test */
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    background-color: lightblue;
    border: 1px solid red;
}

.innerDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    rotate: var(--rotation);
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