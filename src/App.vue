<script setup>
import { RouterView } from "vue-router";
import Master from "./layouts/Master.vue";
import Header from "./components/Master/Header.vue";
import Footer from "./components/Master/Footer.vue";
import { applyDarkMode } from "./services/ui.js";
import { onBeforeMount } from "vue";
onBeforeMount(() => {
    applyDarkMode()
})
</script>

<template>
    <Master class="dark:bg-dark">
        <template v-slot:header>
            <Header></Header>
        </template>

        <RouterView></RouterView>

        <template v-slot:footer>
            <Footer></Footer>
        </template>
    </Master>
</template>

<style scoped></style>
