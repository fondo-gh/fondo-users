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
  }
}

export default ({ app }, inject) => {
  inject('startup', startup)
}
