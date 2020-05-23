const state = () => ({
  newstartup: {
    company_name: 'xpendly',
    caption: 'Fund managment',
    product_image_file: null,
    funds_to_raise: '$20,000',
    duration_for_raise: '3 months',
    startup_id: null,
    loader: false
  },
  startups: null,
  mystartups: null,

  featured: [
    {
      id: 1,
      image: '/g3.jpg',
      title: 'Xpendly',
      address: '761 Old England Ave, Winter Park, Florida, 32789',
      location: 'Accra Ghana',
      slug: 'xpendly',
      description: ''
    },
    {
      id: 2,
      image: '/g3.jpg',
      title: 'itrace',
      address: '761 Old England Ave, Winter Park, Florida, 32789',
      location: 'Accra Ghana',
      slug: 'itrace',
      description: ''
    },
    {
      id: 3,
      image: '/g3.jpg',
      title: 'Diabetica',
      address: '761 Old England Ave, Winter Park, Florida, 32789',
      location: 'Accra Ghana',
      slug: 'diabetica',
      description: ''
    },
    {
      id: 4,
      image: '/g3.jpg',
      title: 'Interrect',
      address: '761 Old England Ave, Winter Park, Florida, 32789',
      location: 'Accra Ghana',
      slug: 'interrect',
      description: ''
    }
  ]
})

const mutations = {
  findCourse(state, slug) {
    const singleCourse = state.featured.find((data) => data.slug === slug)
    state.oneCourse = singleCourse
  },

  findCourseById(state, payload) {
    const courseTee = state.featured.find((data) => data.slug === payload.slug)
    state.courseTee = courseTee
  },
  setStartup(state, data) {
    state.startups = data
  },
  setMyStartups(state, data) {
    state.mystartups = data
  },
  setImage(state, file) {
    state.newstartup.product_image_file = file
  },
  toggleLoader(state, object) {
    state[object].loader
      ? (state[object].loader = false)
      : (state[object].loader = true)
  }
}

const actions = {
  async getAllStartups({ commit }) {
    try {
      const { data } = await this.$startup.allStartups()
      console.log(data)
      commit('setStartup', data.data)
    } catch (error) {
      console.log(error.response)
    }
  },

  async getMyStartups({ commit }) {
    try {
      const { data } = await this.$startup.myStartups()
      console.log(data)
      commit('setMyStartups', data.data)
    } catch (error) {
      console.log(error.response)
    }
  },

  async createBasicStartup({ commit, state }) {
    commit('toggleLoader', 'newstartup')
    const payload = new FormData()
    payload.append('company_name', state.newstartup.company_name)
    payload.append('caption', state.newstartup.caption)
    payload.append('product_image_file', state.newstartup.product_image_file)
    payload.append('funds_to_raise', state.newstartup.funds_to_raise)
    payload.append('duration_for_raise', state.newstartup.duration_for_raise)
    console.log(payload)
    try {
      const { data } = await this.$startup.createBasicStartup(payload)
      console.log(data)
      this._vm.$toasted.show('Basic Startup Created Successfully !!', {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 1000
      })
      this.$router.push({ name: 'dashboard-entrepreneur-mystartups' })
      commit('toggleLoader', 'newstartup')
    } catch (error) {
      console.log(error.response)
      commit('toggleLoader', 'newstartup')
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
