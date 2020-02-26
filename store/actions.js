export default {
  nuxtServerInit({ commit }, ctx) {
    const pageRef = this.$fireDb.ref('page')
    pageRef.once('value').then(snapshot => {
      commit('SET_PAGE', snapshot.val())
    })
  }
}