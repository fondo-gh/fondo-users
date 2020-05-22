const state = () => ({
  profile: {
    bio: null,
    interest: null,
    startups_invested_in: null,
    amount_invested: null,
    occupation: null,
    loader: null
  }
})
const mutations = {
  toggleLoader(state, object) {
    state[object].loader
      ? (state[object].loader = false)
      : (state[object].loader = true)
  }
}
const actions = {
  async saveProfile({ state, commit }) {
    commit('toggleLoader', 'profile')
    try {
      await this.$investor.saveProfile(state.profile)
      commit('toggleLoader', 'profile')
      this._vm.$toasted.show('Profile saved successfully !!', {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 1000
      })
      this.$router.push({ name: 'dashboard-investor-startup' })
    } catch (error) {
      commit('toggleLoader', 'profile')
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
