const state = () => ({
  newstartup: {
    company_name: null,
    caption: null,
    product_image_file: null,
    funds_to_raise: null,
    duration_for_raise: null,
    startup_id: null,
    loader: false
  },
  startups: null,
  mystartups: null,
  startuptypes: null,
  startupindustries: null,
  startupdetails: {
    startup_id: null,
    startup_type_id: 3,
    startup_industry_id: 2,
    has_patent: false,
    location: null,
    id: null
  },
  startupcontact: {
    startup_id: null,
    id: null,
    email: null,
    phone: null,
    facebook_handle: null,
    twitter_handle: null,
    instagram_handle: null,
    skype_handle: null,
    linkedin_handle: null
  },
  startupbusinessmodel: {
    startup_id: null,
    key_resourses: null,
    customer_target: null,
    value_proposition: null,
    sales_channel: null,
    revenue_streams: null,
    key_metrics: null,
    cost_structure: null,
    financial_file: null,
    optional_file: null,
    id: null
  },
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
  },
  setStartupId(state, payload) {
    state[payload.ob].startup_id = payload.payload
  },
  setStartupTypes(state, data) {
    state.startuptypes = data
  },
  setStartupIndustry(state, data) {
    state.startupindustries = data
  },
  setSingleStartup(state, id) {
    const singleStartup = state.mystartups.find((data) => data.id === id)
    state.newstartup.caption = singleStartup.caption
    state.newstartup.funds_to_raise = singleStartup.funds_to_raise
    state.newstartup.duration_for_raise = singleStartup.duration_for_raise
    state.newstartup.company_name = singleStartup.company_name
    state.newstartup.product_image = singleStartup.product_image

    if (singleStartup.startup_detail) {
      state.startupdetails = singleStartup.startup_detail
    }
    if (singleStartup.contact_details) {
      state.startupcontact = singleStartup.contact_details
    }
    if (singleStartup.business_model) {
      state.startupbusinessmodel = singleStartup.business_model
    }

    this.$router.push(
      `/dashboard/entrepreneur/mystartups/completeregister/${id}`
    )
  },

  setFile(state, data) {
    state.startupbusinessmodel[data.type] = data.file
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
    try {
      await this.$startup.createBasicStartup(payload)
      this._vm.$toasted.show('Basic Startup Created Successfully !!', {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 1000
      })
      this.$router.push({ name: 'dashboard-entrepreneur-mystartups' })
      commit('toggleLoader', 'newstartup')
    } catch (error) {
      commit('toggleLoader', 'newstartup')
      this._vm.$toasted.show(`Sorry ${error.response.data.error.message}`, {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 3000
      })
    }
  },
  async saveDetails({ state }, id) {
    const payload = new FormData()
    payload.append('company_name', state.newstartup.company_name)
    payload.append('caption', state.newstartup.caption)
    payload.append('product_image_file', state.newstartup.product_image_file)
    payload.append('funds_to_raise', state.newstartup.funds_to_raise)
    payload.append('duration_for_raise', state.newstartup.duration_for_raise)
    payload.append('startup_id', id)

    try {
      await this.$startup.createBasicStartup(payload)
    } catch (error) {
      this._vm.$toasted.show(error.response.data.error.message, {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 3000
      })
    }
  },
  async getStartupData({ commit, state }) {
    try {
      const { data } = await this.$startup.getStartupData()
      commit('setStartupTypes', data.startup_types.data)
      commit('setStartupIndustry', data.startup_industries.data)
      console.log(data)
    } catch (error) {
      console.log(error.response.data.error.message)
    }
  },

  async saveType({ commit, state }, payload) {
    const detail = {
      ob: 'startupdetails',
      payload
    }
    commit('setStartupId', detail)
    try {
      const { data } = await this.$startup.saveStartupDetail(
        state.startupdetails
      )
      console.log(data)
    } catch (error) {
      this._vm.$toasted.show(`Sorry ${error.response.data.error.message}`, {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 3000
      })
    }
  },
  async saveContact({ commit, state }, payload) {
    const detail = {
      ob: 'startupcontact',
      payload
    }
    commit('setStartupId', detail)
    try {
      const { data } = await this.$startup.saveContactDetail(
        state.startupcontact
      )
      console.log(data)
    } catch (error) {
      this._vm.$toasted.show(`Sorry ${error.response.data.error.message}`, {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 3000
      })
    }
  },
  async saveBusinessModel({ commit, state }, payload) {
    const detail = {
      ob: 'startupbusinessmodel',
      payload
    }
    commit('setStartupId', detail)
    try {
      const { data } = await this.$startup.saveBusinessModel(
        state.startupbusinessmodel
      )
      console.log(data)
    } catch (error) {
      this._vm.$toasted.show(`Sorry ${error.response.data.error.message}`, {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 3000
      })
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
