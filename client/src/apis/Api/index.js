import axios from 'axios'
import call from './call'

export default class Api {
  constructor() {
    this.link = axios.create({
      baseURL: '//localhost:8085/',
      timeout: 5000
    })
  }
  call = call
}
