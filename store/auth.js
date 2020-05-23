const state = () => ({
  currentUser: null,
  user: {
    email: null,
    password: null,
    loader: null
  },
  register: {
    user_type_id: 1,
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    password_confirmation: null,
    loader: null
  },

  error: null
})

const mutations = {
  setCurrentUser(state, data) {
    state.currentUser = data
    if (data.user_type === 'Entrepreneur') {
      // if (data.profile_is_completed) {
      //   window.location = '/dashboard/entrepreneur'
      // } else {
      //   window.location = '/dashboard/entrepreneur/profile'
      window.location = '/dashboard/entrepreneur/mystartups'
      // }
    }

    if (data.user_type === 'Investor') {
      if (data.profile_is_completed) {
        window.location = '/dashboard/investor/startup'
      } else {
        window.location = '/dashboard/investor/profile'
      }
    }
  },
  setError(state, data) {
    state.error = data
  },

  logout(state) {
    state.currentUser = null
    window.location = '/'
  },
  toggleLoader(state, object) {
    state[object].loader
      ? (state[object].loader = false)
      : (state[object].loader = true)
  }
}

const actions = {
  async login({ commit, state }) {
    try {
      commit('toggleLoader', 'user')
      const { data } = await this.$axios.post('/user/login', state.user)
      commit('setCurrentUser', data.data)
      commit('setError', null)
      commit('toggleLoader', 'user')
    } catch (error) {
      commit('setError', error.response.data.error.message)
      commit('toggleLoader', 'user')
    }
  },

  async register({ commit, state }) {
    try {
      commit('toggleLoader', 'register')
      const { data } = await this.$axios.post('/user/register', state.register)
      commit('setCurrentUser', data)
      commit('setError', null)
      commit('toggleLoader', 'register')
    } catch (error) {
      commit('setError', error.response.data.error.message)
      commit('toggleLoader', 'register')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
