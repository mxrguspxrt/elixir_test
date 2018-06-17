import {Component} from 'react'
import dispatch from './dispatch'
import api from './api'
import render from './render'
import './index.css'

class App extends Component {
  api = api
  dispatch = dispatch
  render = render
}

export default App
