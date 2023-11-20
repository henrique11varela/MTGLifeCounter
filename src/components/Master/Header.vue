<template>
    <div
        class="flex justify-between items-center rounded-md m-2 p-2 bg-dark-emphasis text-dark dark:bg-secondary dark:text-dark-emphasis"
        :class="{ hidden: fullscreen }"
    >
        <div>
            <RouterLink
                :to="{ name: 'Home' }"
                class="text-xl py-1 px-2 rounded-md"
                >MTG Life Counter</RouterLink
            >
        </div>
        <div>
            <button @click="toggleDarkMode">asdasd</button>
        </div>
        <div class="relative">
            <button
                class="py-1 px-2 rounded-md"
                @click="toggleHidden(this.$refs.dropdown)"
            >
                <img class="w-5 h-8" src="../../assets/mana/Infect.svg" />
            </button>
            <div class="relative h-0 w-full">
                <div
                    class="flex flex-col gap-2 z-50 absolute right-0 top-3 p-2 rounded-md hidden bg-dark-emphasis dark:text-light dark:bg-secondary"
                    ref="dropdown"
                >
                    <RouterLink :to="{ name: 'Home' }" class="p-2"
                        >Home</RouterLink
                    >
                    <RouterLink :to="{ name: 'Game' }" class="p-2"
                        >Game</RouterLink
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { toggleHidden } from "../../services/ui.js";
import { RouterLink } from "vue-router";
import useWebsiteStore from "../../store/Website.js";
import { mapState } from "pinia";
import { toggleDarkMode } from "../../services/ui.js";

export default {
    computed: {
        ...mapState(useWebsiteStore, ["fullscreen"]),
    },
    methods: {
        toggleHidden,
        toggleDarkMode
    },
};
</script>

<style scoped></style>
