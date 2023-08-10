<script setup>
import PlayerGrid from './components/PlayerGrid.vue';

</script>

<template>
  <div id="base">
    <PlayerGrid num-players="5" />
  </div>
</template>

<style scoped>
  #base {
    width: 100vw;
    height: 100dvh;
  }
  @media only screen and (max-aspect-ratio: 1){
  #base {
    width: 100dvh;
    height: 100vw;
    rotate: 90deg;
  }
  
}
</style>
