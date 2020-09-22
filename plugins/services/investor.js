import axios from './../axios'
const investor = {
  saveProfile: (payload) => {
    return axios.post('/investor/profile/complete', payload)
  },
  approvedStartups: () => {
    return axios.get('/investor/startups')
  }
}

export default ({ app }, inject) => {
  inject('investor', investor)
}
