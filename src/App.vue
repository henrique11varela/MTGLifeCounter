<script setup>
import PlayerGrid from './components/PlayerGrid.vue';

</script>

<template>
  <div id="base">
    <PlayerGrid quant-players="5" />
  </div>
</template>

<style scoped>
#base {
  width: 100vw;
  height: 100dvh;
}
</style>
