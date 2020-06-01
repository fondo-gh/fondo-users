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
  saveStartupDetail: (payload) => {
    console.log(payload)
    return axios.post('/startup/startup_detail', payload)
  },
  saveContactDetail: (payload) => {
    return axios.post('/startup/contact_detail', payload)
  },
  saveBusinessModel: (payload) => {
    return axios.post('/startup/business_model', payload)
  }
}

export default ({ app }, inject) => {
  inject('startup', startup)
}
