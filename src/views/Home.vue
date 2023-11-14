<template>
    <div class="w-full flex flex-col justify-evenly items-center">
        <select
            v-model="selectedQuantPlayers"
            class="select border-primary focus:border-primary max-w-xs"
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        <RouterLink :to="{ name: 'Game' }" class="btn">Start</RouterLink>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import useGameStore from "../store/Game";
export default {
    data() {
        return {
            selectedQuantPlayers: "",
        };
    },
    computed: {
        ...mapState(useGameStore, ["getQuantPlayers"]),
    },
    methods: {
        ...mapActions(useGameStore, ["setQuantPlayers"]),
    },
    watch: {
        selectedQuantPlayers(newValue) {
            this.setQuantPlayers(Number(newValue));
        },
    },
    mounted() {
        this.selectedQuantPlayers = this.getQuantPlayers;
    },
    components: {
        RouterLink,
    },
};
</script>

<style scoped>
</style>
