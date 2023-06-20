import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Button from './StyledComponents'
// import Game from './Game'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <nav className="header-container">
          <div className="container">
            <p className="game-text">ROCK</p>
            <p className="game-text">PAPER</p>
            <p className="game-text">SCISSORS</p>
          </div>
          <div className="score-container">
            <p className="score">Score</p>
            <p className="number">{0}</p>
          </div>
        </nav>
        <div className="game-container">
          <Button data-testid="rockButton">
            <img
              className="image"
              src={choicesList[0].imageUrl}
              alt="rockButton"
            />
          </Button>
          <Button data-testid="scissorsButton">
            <img
              className="image"
              src={choicesList[1].imageUrl}
              alt="scissorsButton"
            />
          </Button>
        </div>
        <div className="paper-button-container">
          <Button data-testid="paperButton">
            <img
              className="image"
              src={choicesList[2].imageUrl}
              alt="paperButton"
            />
          </Button>
        </div>
        <div className="popup-container">
          <Popup
            className="popup"
            modal
            trigger={
              <button className="trigger-button" type="button">
                RULES
              </button>
            }
          >
            {close => (
              <>
                <div>
                  <img
                    className="popup-image"
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
              </>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}
export default App
