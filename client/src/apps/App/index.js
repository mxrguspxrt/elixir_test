import {Component} from 'react'
import dispatch from './dispatch'
import api from './api'
import render from './render'
import './index.css'

const initialState = {
  prices: {
    items: [],
    isLoading: true
  }
}

class App extends Component {
  constructor(...args) {
    super(...args)
    this.state = initialState
    window.app = this
  }
  api = api
  dispatch = dispatch
  render = render
}

export default App
