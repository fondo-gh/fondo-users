import axios from 'axios'

let token = ''
const user = JSON.parse(localStorage.getItem('fondo'))

if (user) {
  token = user.auth.currentUser.token
}
const headers = {
  Authorization: `Bearer ${token}`
}

const client = axios.create({
  baseURL: 'http://fondo-app-gh.herokuapp.com/api/v1',
  headers
})

export default client
