// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  /*
  showHideFirstName = () => {
    const {firstName} = this.state
    if (firstName === true) {
      this.setState(prevState => ({firstName: false}))
    }
    return {firstName: true}
  }

  showHideFirstName = () => {
    const {lastName} = this.state
    if (lastName === true) {
      this.setState(prevState => ({lastName: false}))
    }
    return {lastName: true}
  }
  */

  showHideFirstName = () => {
    const {firstName} = this.state
    if (firstName === true) {
      this.setState({firstName: false})
    } else {
      this.setState({firstName: true})
    }
  }

  showHideLastName = () => {
    const {lastName} = this.state
    if (lastName === true) {
      this.setState({lastName: false})
    } else {
      this.setState({lastName: true})
    }
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button type="button" onClick={this.showHideFirstName}>
              Show/Hide Firstname
            </button>
            {firstName ? (
              <div className="names-container">
                <h1 className="name">Joe</h1>
              </div>
            ) : null}
          </div>
          <div className="name-container">
            <button type="button" onClick={this.showHideLastName}>
              Show/Hide Lastname
            </button>
            {lastName ? (
              <div className="names-container">
                <h1 className="name">Jonas</h1>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
