<template>
    <div class="w-full flex flex-col justify-evenly items-center">
        <select
            v-model="selectedQuantPlayers"
            class="select text-center w-3/4 rounded-md p-2 bg-dark-emphasis text-dark dark:bg-secondary dark:text-dark-emphasis focus:border focus:border-primary"
        >
            <option v-for="index in 6" :key="index" :value="index">{{ index }}</option>
            
        </select>
        <RouterLink :to="{ name: 'Game' }" class="btn text-center w-3/4 rounded-md p-2 bg-dark-emphasis text-dark dark:bg-secondary dark:text-dark-emphasis focus:border focus:border-primary">Start</RouterLink>
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
