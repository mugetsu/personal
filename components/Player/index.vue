<template>
  <div>
    <div v-if="debug">
      <div>World Box: <strong>{{ worldBox }}</strong></div>
      <div>Player Box: x: <strong>{{ playerBox.x }}</strong>, y: <strong>{{ playerBox.y }}</strong></div>
      <div>Steps: <strong>{{ steps }}</strong></div>
      <div>Collided: <strong>{{ isHit }}</strong></div>
    </div>
    <div
      ref="player"
      class="player"
      :class="{
        'is-visible': isReady
      }">
      <div
        class="standby"
        :class="[
          {
            'is-reversed ': isReversed,
            'walk': isWalking,
            'attack': isAttacking
          }
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: {
    debug: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isReady: false,
      playerBox: {},
      worldBox: 0,
      keyState: {},
      state: 'standby',
      isHit: false,
      isReversed: false,
      isWalking: false,
      isAttacking: false,
      steps: 0
    }
  },
  methods: {
    walkLoop() {
      if (this.$refs.player) {
        this.isWalking = false
        this.isAttacking = false
        // A & Arrow Left
        if (this.keyState[37] || this.keyState[65]) {
          this.steps-=2
          this.isReversed = true
          this.isWalking = true
        }
        // D & Arrow Right
        if (this.keyState[39] || this.keyState[68]) {
          this.steps+=2
          this.isReversed = false
          this.isWalking = true
        }
        // S
        if (this.keyState[83]) {
          this.isAttacking = true
        }
        if (this.isWalking) {
          this.$refs.player.style.transform = `translate(${this.steps}px, calc(-50% + 2px)`
        } else if (this.isAttacking) {
          this.$refs.player.style.transform = `translate(${this.steps}px, calc(-50% - 4px)`
        } else {
          this.$refs.player.style.transform = `translate(${this.steps}px, -50%)`
        }
        // this.checkCollisions('.player', '.wall')
        this.checkEdge()
        window.requestAnimationFrame(this.walkLoop)
      }
    },
    getPositions(el) {
      let player = document.querySelector(el).getBoundingClientRect()
      let x = player.x
      let y = player.y
      let width = player.width
      let height = player.height
      return [
        [ x, x + width ],
        [ y, y + height ]
      ]
    },
    comparePositions(p1, p2) {
      let x1 = p1[0] < p2[0] ? p1 : p2
      let x2 = p1[0] < p2[0] ? p2 : p1
      return x1[1] > x2[0] || x1[0] === x2[0] ? true : false
    },
    checkCollisions(start, destination) {
      let dest = document.querySelector(destination)
      let pos = this.getPositions(destination)
      let pos2 = this.getPositions(start)
      let horizontalMatch = this.comparePositions(pos[0], pos2[0])
      let verticalMatch = this.comparePositions(pos[1], pos2[1])
      this.isHit = horizontalMatch && verticalMatch
    },
    checkEdge() {
      this.worldBox = this.$parent.$el.getBoundingClientRect().width
      this.playerBox = this.$refs.player.getBoundingClientRect()
      if (this.playerBox.x < -(this.playerBox.width)) {
        this.steps = this.worldBox
      }
      if (this.steps > this.worldBox) {
        this.steps = -(this.playerBox.width)
      }
    }
  },
  mounted() {
    document.addEventListener('keydown', e => {
      this.keyState[e.keyCode || e.which] = true
    })
    document.addEventListener('keyup', e => {
      this.keyState[e.keyCode || e.which] = false
    })
    window.requestAnimationFrame(this.walkLoop)
    this.checkEdge()
    this.steps = (this.worldBox / 2) - (this.playerBox.width / 2)
    this.isReady = true
  }
}
</script>

<style lang="scss" scoped>
.player {
  opacity: 0;
  transition: opacity 1s ease;
}

.is-visible {
  opacity: 1;
}

.is-reversed {
  transform: scaleX(-1);
}

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

.attack {
  width: 91px;
  height: 80px;
  background-image: url('~static/images/attack.png');
  animation: attack .8s steps(10) infinite;
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

@keyframes attack {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 -809px;
  }
}
</style>