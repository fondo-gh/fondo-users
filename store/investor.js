const state = () => ({
  profile: {
    bio: null,
    interest: null,
    startups_invested_in: null,
    amount_invested: null,
    occupation: null,
    loader: null
  },
  approvedstartups: null,
  onestartup: null
})
const mutations = {
  toggleLoader(state, object) {
    state[object].loader
      ? (state[object].loader = false)
      : (state[object].loader = true)
  },

  setStartupData(state, data) {
    state.approvedstartups = data
  },
  setOneStartup(state, startupid) {
    console.log(startupid)
    const oneStartup = state.approvedstartups.find(
      (startup) => startup.uuid === startupid
    )
    state.onestartup = oneStartup
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
  },
  async getApprovedStartups({ commit }) {
    try {
      const { data } = await this.$investor.approvedStartups()
      console.log('investor startup', data.data)
      commit('setStartupData', data.data)
    } catch (error) {
      console.log(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
