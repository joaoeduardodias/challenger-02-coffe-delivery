import axios from 'axios'

const api = axios.create({
  baseURL: 'localhost:3333/coffees',
})

export default api
