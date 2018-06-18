import {Component} from 'react'
import componentDidMount from './componentDidMount'
import componentWillUnmount from './componentWillUnmount'
import render from './render'
import './index.css'

class Prices extends Component {
  componentDidMount = componentDidMount
  componentWillUnmount = componentWillUnmount
  render = render
}

export default Prices
