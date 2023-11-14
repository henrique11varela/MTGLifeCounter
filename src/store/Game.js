import { defineStore } from "pinia";

const useGameStore = defineStore("game", {
    state: () => ({
        quantPlayers: 2
    }),
    getters: {
        getQuantPlayers() {
            this.quantPlayers = Number(localStorage.getItem('quantPlayers'))
            if (!this.quantPlayers) {
                localStorage.setItem('quantPlayers', '2')
                this.quantPlayers = 2
            }
            return this.quantPlayers;
        },
    },
    actions: {
        setQuantPlayers(quant) {
            this.quantPlayers = quant
            localStorage.setItem('quantPlayers', `${this.quantPlayers}`)
        },
    },
});

export default useGameStore;
