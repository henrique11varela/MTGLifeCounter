<template>
    <div
        class="w-full flex justify-center items-center p-4 border-t border-zinc-700"
        :class="{ hidden: fullscreen }"
    >
        <p>
            Made by
            <a href="https://github.com/henrique11varela" class="text-blue-500"
                >Henrique Varela</a
            >
        </p>
    </div>
</template>

<script>
import useWebsiteStore from "../../store/Website.js";
import { mapState } from "pinia";
export default {
    computed: {
        ...mapState(useWebsiteStore, ["fullscreen"]),
    },
};
</script>

<style scoped></style>
