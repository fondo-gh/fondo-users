const state = () => ({
  newstartup: {
    company_name: null,
    caption: null,
    product_image: null,
    funds_to_raise: null,
    duration_for_raise: null,
    startup_id: null,
    loader: false
  },
  startups: null,
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
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}

