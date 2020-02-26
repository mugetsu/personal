<template>
  <div class="wrapper">
    <div class="wrap-header">
      <Header />
    </div>
    <div class="main-content">
      <nuxt />
    </div>
    <div class="wrap-footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    title() {
      return this.$store.state.page.title
    },
    description() {
      return this.$store.state.page.description
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/base.scss';
</style>
