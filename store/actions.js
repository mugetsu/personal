export default {
  async nuxtServerInit({ commit }, ctx) {
    const pageRef = this.$fireDb.ref('page')
    try {
      const snapshot = await pageRef.once('value')
      commit('SET_PAGE', snapshot.val())
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
