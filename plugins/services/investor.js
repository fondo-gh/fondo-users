import axios from './../axios'
const investor = {
  saveProfile: (payload) => {
    return axios.post('/investor/profile/complete', payload)
  }
}

export default ({ app }, inject) => {
  inject('investor', investor)
}
