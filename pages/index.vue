<template>
  <div class="scene">
    <Player />
    <div class="land"></div>
    <!-- <div class="wall"></div> -->
    <!-- <Cryflow :phrases="phrases" /> -->
  </div>
</template>

<script>
import Player from '~/components/Player'
// import Cryflow from 'cryflow'
// import Kawaii from '~/components/Kawaii'

export default {
  components: {
    Player
    // Kawaii,
    // Cryflow
  },
  data() {
    return {
      // phrases: [
      //   'CSS3',
      //   'HTML5',
      //   'Javascript',
      //   'Vue',
      //   'Nuxt',
      //   'Node',
      //   'Jest'
      // ]
    }
  }
}
</script>

<style lang="scss">
.scene {
  position: relative;
  width: 100%;
  overflow: hidden;

  .player {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  .land {
    position: absolute;
    left: 0;
    top: calc(50% + 38px);
    width: 100%;
    height: 1px;
    background: #6E3E27;
    transform: translateY(-50%);
  }

  .wall {
    position: absolute;
    left: 30%;
    top: calc(50% - 1px);
    width: 80px;
    height: 80px;
    background: #000;
    transform: translateY(-50%);
  }
}
</style>
