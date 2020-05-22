import axios from './../axios'
const startup = {
  allStartups: () => {
    return axios.get('/user/startups')
  }
}

export default ({ app }, inject) => {
  inject('startup', startup)
}
