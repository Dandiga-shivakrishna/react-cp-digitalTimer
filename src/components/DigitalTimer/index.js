import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isTimerRunning: false,
    minutes: 25,
    seconds: '00',
  }

  onIncrement = () => {
    this.setState(prevState => ({minutes: prevState.minutes + 1}))
  }

  onDecrement = () => {
    this.setState(prevState => ({minutes: prevState.minutes - 1}))
  }

  onStartOrPauseTimer = () => {
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  onResetTimer = () => {
    const {minutes, seconds} = this.state
    this.setState({minutes, seconds})
  }

  render() {
    const {isTimerRunning, minutes, seconds} = this.state

    const startOrPauseImageUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const startOrPauseAltText = isTimerRunning ? 'pause icon' : 'play icon'
    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="bg-sub-container">
          <div className="img-timer">
            <div className="col-style">
              <p className="paragraph">
                {minutes}:{seconds}
              </p>
              <p className="timer-controller-label">
                {isTimerRunning ? 'Running' : 'Paused'}
              </p>
            </div>
          </div>
          <div className="timer-controller-col">
            <div className="timer-controller-container">
              <button
                className="timer-controller-btn"
                onClick={this.onStartOrPauseTimer}
                type="button"
              >
                <img
                  alt={startOrPauseAltText}
                  className="timer-controller-icon"
                  src={startOrPauseImageUrl}
                />
                <p className="timer-controller-label">
                  {isTimerRunning ? 'Pause' : 'Start'}
                </p>
              </button>
              <button
                className="timer-controller-btn"
                onClick={this.onResetTimer}
                type="button"
              >
                <img
                  alt="reset icon"
                  className="timer-controller-icon"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                />
                <p className="timer-controller-label">Reset</p>
              </button>
            </div>
            <div className="heading">
              <p>Set Timer Limit</p>
            </div>
            <div className="timer-controller-container">
              <button
                onClick={this.onDecrement}
                type="button"
                className="timer-controller-btn"
              >
                <p className="timer-controller-label"> - </p>
              </button>
              <div className="text-bg">
                <p>{minutes}</p>
              </div>
              <button
                type="button"
                className="timer-controller-btn"
                onClick={this.onIncrement}
              >
                <p className="timer-controller-label"> + </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
