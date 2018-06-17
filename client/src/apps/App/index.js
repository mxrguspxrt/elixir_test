import {Component} from 'react'
import dispatch from './dispatch'
import render from './render'
import './index.css'

class App extends Component {
  dispatch = dispatch
  render = render
}

export default App
