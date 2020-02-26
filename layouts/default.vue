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
import { mapGetters } from 'vuex'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapGetters([
      'page'
    ])
  },
  head () {
    return {
      title: this.page.title,
      meta: [
        { hid: 'og:description', name: 'og:description', content: this.page.description },
        { hid: 'description', name: 'description', content: this.page.description }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/base.scss';
</style>
