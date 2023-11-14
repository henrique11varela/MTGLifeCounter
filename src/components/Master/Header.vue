<template>
    <div class="navbar bg-base-100 border-b border-zinc-700" :class="{hidden: fullscreen}">
        <div class="flex-1">
            <RouterLink :to="{ name: 'Home' }" class="btn btn-ghost text-xl"
                >MTG Life Counter</RouterLink
            >
        </div>
        <details class="dropdown dropdown-end flex-none">
            <summary class="m-1 btn btn-square btn-ghost flex">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-5 h-5 stroke-current"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </summary>
            <ul
                class="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-max"
            >
                <li><RouterLink :to="{ name: 'Home' }">Home</RouterLink></li>
                <li><RouterLink :to="{ name: 'Game' }">Game</RouterLink></li>
            </ul>
        </details>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import useWebsiteStore from "../../store/Website.js";
import { mapState } from 'pinia'
export default {
    computed: {
        ...mapState(useWebsiteStore, ['fullscreen'])
    }
};
</script>

<style scoped></style>
