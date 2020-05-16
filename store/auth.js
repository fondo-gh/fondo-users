const state = () => ({
  currentUser: null,
  user: { email: null, password: null },
  register: {
    user_type_id: 1,
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    password_confirmation: null
  },
  loader: false,
  error: null
})

const mutations = {
  setCurrentUser(state, data) {
    state.currentUser = data
    data.user_type === 'Entrepreneur'
      ? (window.location = '/dashboard/startup')
      : (window.location = '/dashboard/investor')
  },
  toggleLoader(state) {
    state.loader ? (state.loader = false) : (state.loader = true)
  },
  setError(state, data) {
    state.error = data
  }
}

const actions = {
  async login({ commit, state }) {
    try {
      commit('toggleLoader')
      const { data } = await this.$axios.post('/user/login', state.user)
      commit('setCurrentUser', data)
      commit('setError', null)
      commit('toggleLoader')
    } catch (error) {
      commit('setError', error.response.data.error.message)
      commit('toggleLoader')
    }
  },

  async register({ commit, state }) {
    try {
      commit('toggleLoader')
      const { data } = await this.$axios.post('/user/register', state.register)
      commit('setError', null)
      commit('setCurrentUser', data)
      commit('toggleLoader')
    } catch (error) {
      commit('setError', error.response.data.error.message)
      commit('toggleLoader')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
