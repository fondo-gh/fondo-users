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
      window.location = '/dashboard/entrepreneur/mystartups'
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
      console.log(data)
      commit('setCurrentUser', data.data)
      commit('setError', null)
      commit('toggleLoader', 'user')
    } catch (error) {
      this._vm.$toasted.show(error.response.data.error.message, {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 3000
      })
      commit('setError', error.response.data.error.message)
      commit('toggleLoader', 'user')
    }
  },

  async register({ commit, state }) {
    try {
      commit('toggleLoader', 'register')
      const { data } = await this.$axios.post('/user/register', state.register)
      commit('setCurrentUser', data.data)
      commit('setError', null)
      commit('toggleLoader', 'register')
    } catch (error) {
      this._vm.$toasted.show(error.response.data.error.message, {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 3000
      })
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
