import axios from './../axios'
const startup = {
  allStartups: () => {
    return axios.get('/investor/startups')
  },
  myStartups: () => {
    return axios.get('/user/startups')
  },
  createBasicStartup: (payload) => {
    return axios.post('/startup/register', payload)
  },
  getStartupData: () => {
    return axios.get('/startup/registration/data/startup_detail')
  },
  getProductDetail: () => {
    return axios.get('/startup/registration/data/product_detail')
  },
  getCofounderDetail: () => {
    return axios.get('/startup/registration/data/cofounder_detail')
  },
  getTeamDetail: () => {
    return axios.get('/startup/registration/data/startup_team')
  },
  saveStartupDetail: (payload) => {
    return axios.post('/startup/startup_detail', payload)
  },
  saveContactDetail: (payload) => {
    return axios.post('/startup/contact_detail', payload)
  },
  saveBusinessModel: (payload) => {
    console.log(payload)
    return axios.post('/startup/business_model', payload)
  },
  saveProductDetail: (payload) => {
    return axios.post('/startup/product_detail', payload)
  },
  saveCofounderDetail: (payload) => {
    return axios.post('/startup/cofounder_detail', payload)
  },
  saveTeamDetail: (payload) => {
    return axios.post('/startup/startup_team', payload)
  }
}

export default ({ app }, inject) => {
  inject('startup', startup)
}
