let auth = null
const user = JSON.parse(localStorage.getItem('fondo'))
if (user) {
  auth = user.user
}
const state = () => ({
  newstartup: {
    company_name: null,
    caption: null,
    product_image_file: '',
    funds_to_raise: null,
    duration_for_raise: null,
    startup_id: null,
    loader: false
  },
  startups: null,
  mystartups: null,
  startuptypes: null,
  startupindustries: null,
  productprogressdetail: null,
  startupcofounder: null,
  startupteam: null,
  startupdetails: {
    startup_id: null,
    startup_type_id: 3,
    startup_industry_id: 2,
    has_patent: false,
    location: null,
    business_registration_number: null,
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
    key_resources: null,
    customer_target: null,
    value_proposition: null,
    sales_channels: null,
    revenue_streams: null,
    key_metrics: null,
    cost_structure: null,
    financial_file_upload: null,
    optional_file_upload: null,
    id: null
  },
  productdetails: {
    startup_id: null,
    product_progress_id: 1,
    product_url: null,
    id: null
  },
  cofounderdetail: {
    startup_id: null,
    funding_amount: null,
    rate_of_devotion: null,
    cofounders: [
      {
        name: auth
          ? `${auth.currentUser.first_name} ${auth.currentUser.last_name}`
          : null,
        email: auth ? auth.currentUser.email : null,
        cofounder_role_id: 1
      },
      {
        name: null,
        email: null,
        cofounder_role_id: 1
      }
    ],
    id: null
  },
  teamdetail: {
    startup_id: null,
    startup_teams: [
      {
        name: null,
        business_team_id: 1
      }
    ],
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
    if (!file) {
      state.newstartup.product_image_file = ''
    }
    state.newstartup.product_image_file = file
  },
  toggleLoader(state, object) {
    state[object].loader
      ? (state[object].loader = false)
      : (state[object].loader = true)
  },
  setStartupId(state, payload) {
    state[payload.ob].startup_id = payload.payload
    if (payload.ob === 'cofounderdetail') {
      const cofounders = state.cofounderdetail.cofounders
      for (let i = 0; i < cofounders.length; i++) {
        if (!cofounders[i].name) cofounders.splice(i, 1)
      }
    }

    if (payload.ob === 'teamdetail') {
      const teams = state.teamdetail.startup_teams
      for (let i = 0; i < teams.length; i++) {
        if (!teams[i].name) teams.splice(i, 1)
      }
    }
  },
  setStartupTypes(state, data) {
    state.startuptypes = data
  },
  setStartupIndustry(state, data) {
    state.startupindustries = data
  },
  setStartupDetail(state, data) {
    state.startupdetail = data
  },
  setStartupData(state, payload) {
    state[payload.ob] = payload.payload
  },
  setCofounder(state) {
    const data = {
      name: null,
      email: null,
      cofounder_role_id: 1
    }
    state.cofounderdetail.cofounders.push(data)
  },
  removeCofounder(state) {
    if (state.cofounderdetail.cofounders.length > 1) {
      state.cofounderdetail.cofounders.pop()
    } else {
      alert('You must have atleast one co-founder for your startup')
    }
  },
  setTeam(state) {
    const data = {
      name: null,
      business_team_id: 1
    }
    state.teamdetail.startup_teams.push(data)
  },
  removeTeam(state) {
    if (state.teamdetail.startup_teams.length > 1) {
      state.teamdetail.startup_teams.pop()
    } else {
      alert('You must have atleast one team for your startup')
    }
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
    if (singleStartup.contact_detail) {
      state.startupcontact = singleStartup.contact_detail
    }
    if (singleStartup.business_model) {
      state.startupbusinessmodel = singleStartup.business_model
    }
    if (singleStartup.product_detail) {
      state.productdetails = singleStartup.product_detail
    }
    if (singleStartup.cofounder_detail) {
      state.cofounderdetail = singleStartup.cofounder_detail
    }
    if (singleStartup.startup_teams) {
      state.startupteam = singleStartup.startup_teams
    }

    this.$router.push(
      `/dashboard/entrepreneur/mystartups/completeregister/${id}`
    )
  },

  setFile(state, data) {
    if (!data.file) {
      state.startupbusinessmodel[data.type] = null
    }
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
  async saveDetails({ state, commit }, id) {
    const payload = new FormData()
    payload.append('company_name', state.newstartup.company_name)
    payload.append('caption', state.newstartup.caption)
    payload.append('funds_to_raise', state.newstartup.funds_to_raise)
    payload.append('duration_for_raise', state.newstartup.duration_for_raise)
    payload.append('startup_id', id)
    if (!checkIfImageLink(state.newstartup.product_image_file)) {
      payload.append('product_image_file', state.newstartup.product_image_file)
    }

    try {
      await this.$startup.createBasicStartup(payload)
      commit('setImage', null)
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
      const payload1 = {
        ob: 'startuptypes',
        payload: data.startup_types.data
      }
      const payload2 = {
        ob: 'startupindustries',
        payload: data.startup_industries.data
      }
      commit('setStartupData', payload1)
      commit('setStartupData', payload2)
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
  async saveBusinessModel({ commit, state }, id) {
    const businessPayload = new FormData()
    console.log('key resources', state.startupbusinessmodel.key_resources)
    businessPayload.append(
      'key_resources',
      state.startupbusinessmodel.key_resources
    )
    businessPayload.append(
      'customer_target',
      state.startupbusinessmodel.customer_target
    )
    businessPayload.append(
      'value_proposition',
      state.startupbusinessmodel.value_proposition
    )
    businessPayload.append(
      'sales_channels',
      state.startupbusinessmodel.sales_channels
    )
    businessPayload.append(
      'revenue_streams',
      state.startupbusinessmodel.revenue_streams
    )
    businessPayload.append(
      'key_metrics',
      state.startupbusinessmodel.key_metrics
    )
    businessPayload.append(
      'cost_structure',
      state.startupbusinessmodel.cost_structure
    )

    if (!checkIfFileLink(state.newstartup.product_image_file)) {
      businessPayload.append(
        'financial_file_upload',
        state.startupbusinessmodel.financial_file_upload
      )
    }
    if (!checkIfFileLink(state.newstartup.product_image_file)) {
      businessPayload.append(
        'optional_file_upload',
        state.startupbusinessmodel.optional_file_upload
      )
    }

    businessPayload.append('startup_id', id)
    console.log('get all data', businessPayload.get('sales_channels'))

    try {
      const { data } = await this.$startup.saveBusinessModel(businessPayload)
      console.log(data)
    } catch (error) {
      this._vm.$toasted.show(`Sorry ${error.response.data.error.message}`, {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 3000
      })
    }
  },

  async getProductDetail({ commit, state }) {
    try {
      const { data } = await this.$startup.getProductDetail()
      const payload = {
        ob: 'productprogressdetail',
        payload: data.data
      }
      commit('setStartupData', payload)
    } catch (error) {
      console.log(error.response.data.error.message)
    }
  },

  async getCofounderDetail({ commit, state }) {
    try {
      const { data } = await this.$startup.getCofounderDetail()
      const payload = {
        ob: 'startupcofounder',
        payload: data.data
      }
      commit('setStartupData', payload)
    } catch (error) {
      console.log(error.response.data.error.message)
    }
  },

  async getTeamDetail({ commit, state }) {
    try {
      const { data } = await this.$startup.getTeamDetail()
      const payload = {
        ob: 'startupteam',
        payload: data.data
      }
      commit('setStartupData', payload)
    } catch (error) {
      console.log(error.response.data.error.message)
    }
  },

  async saveProductDetail({ commit, state }, payload) {
    const detail = {
      ob: 'productdetails',
      payload
    }
    commit('setStartupId', detail)
    try {
      const { data } = await this.$startup.saveProductDetail(
        state.productdetails
      )
      console.log(data)
    } catch (error) {
      this._vm.$toasted.show(error.response.data.error.message, {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 3000
      })
    }
  },

  async saveCofounderDetail({ commit, state }, payload) {
    const detail = {
      ob: 'cofounderdetail',
      payload
    }
    commit('setStartupId', detail)
    try {
      const { data } = await this.$startup.saveCofounderDetail(
        state.cofounderdetail
      )
      console.log(data)
    } catch (error) {
      this._vm.$toasted.show(error.response.data.error.message, {
        theme: 'toasted-primary',
        position: 'top-center',
        duration: 3000
      })
    }
  },

  async saveTeamDetail({ commit, state }, payload) {
    const detail = {
      ob: 'teamdetail',
      payload
    }
    commit('setStartupId', detail)
    try {
      const { data } = await this.$startup.saveTeamDetail(state.teamdetail)
      console.log(data)
    } catch (error) {
      this._vm.$toasted.show(error.response.data.error.message, {
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

const checkIfImageLink = (link) => {
  return /\.(jpg|gif|png|jpeg)$/.test(link)
}

const checkIfFileLink = (link) => {
  return /\.(pdf|doc|docx|xlsx|xlsm|xlsb)$/.test(link)
}
