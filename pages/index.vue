<template>
  <div class="scene">
    <Player />
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
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .player {
    display: block;
  }
}
</style>
