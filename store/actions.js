export default {
  async nuxtServerInit({ commit }, ctx) {
    const pageRef = this.$fireDb.ref('page')
    try {
      await pageRef.once('value').then(snapshot => {
        commit('SET_PAGE', snapshot.val())
      })
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
