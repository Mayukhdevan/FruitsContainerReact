import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  eatMango = () =>
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))

  eatBanana = () =>
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="main-body">
          <h1 className="main-heading">
            Bob ate <span>{mangoCount}</span> mangoes <span>{bananaCount}</span>
            bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-item">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
