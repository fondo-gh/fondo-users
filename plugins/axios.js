import axios from 'axios'

let token = ''
const user = JSON.parse(localStorage.getItem('fondo'))

if (user) {
  // check if current user is not null
  if (user.auth.currentUser !== null) {
    token = user.auth.currentUser.token
  } else {
    token = null
  }
} else {
  token = null
}
const headers = {
  Authorization: `Bearer ${token}`
}

const client = axios.create({
  baseURL: 'http://fondo-app-gh.herokuapp.com/api/v1',
  headers
})

export default client
