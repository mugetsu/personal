<template>
  <div>
    <span v-if="isHit">Collided!</span>
    <div class="player">
      <div :class="state" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  data() {
    return {
      state: 'standby',
      isHit: false
    }
  },
  methods: {
    getPositions(el) {
      let player = document.querySelector(el)
      let width = player.width()
      let height = player.height()
      return [
        [ pos.offsetLeft, pos.offsetLeft + width ],
        [ pos.offsetTop, pos.offsetTop + height ]
      ]
    },
    comparePositions(p1, p2) {
      let x1 = p1[0] < p2[0] ? p1 : p2
      let x2 = p1[0] < p2[0] ? p2 : p1
      return x1[1] > x2[0] || x1[0] === x2[0] ? true : false
    },
    checkCollisions(start, destination) {
      let dest = document.querySelector(destination)
      let pos = this.getPositions(dest)
      let pos2 = this.getPositions(start)
      let horizontalMatch = this.comparePositions(pos[0], pos2[0])
      let verticalMatch = this.comparePositions(pos[1], pos2[1]);           
      let match = horizontalMatch && verticalMatch
      if (match) {
        this.isHit = true
      }
    }
  },
  mounted() {
    document.onkeydown = (e) => {
      if (e.keyCode === 39) {
        this.state = 'walk'
      }

      if (e.keyCode === 37) {
        this.state = 'reversed walk'
      }
    }

    document.onkeyup = (e) => {
      this.state = 'standby'
    }
  },
}
</script>

<style lang="scss" scoped>
.standby {
  width: 76px;
  height: 72px;
  background-image: url('~static/images/standby.png');
  animation: standby .8s steps(10) infinite;
}

.walk {
  width: 76px;
  height: 76px;
  background-image: url('~static/images/walk.png');
  animation: walk .8s steps(10) infinite;
}

.reversed {
  transform: scaleX(-1);
}

@keyframes standby {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 -729px;
  }
}

@keyframes walk {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 -769px;
  }
}
</style>