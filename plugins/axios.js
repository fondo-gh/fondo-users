import axios from 'axios'

const client = axios.create({
  baseURL: 'http://fondo-app-gh.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export default client
