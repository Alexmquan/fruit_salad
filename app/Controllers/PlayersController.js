import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { playersService } from "../Services/PlayersService.js";
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPlayer() {
  const players = appState.players
  let template = ''
  players.forEach(p => template += p.PlayerTemplate)
  setHTML('players', template)
}

function _drawActive() {
  let activePlayer = appState.activePlayer
  setHTML('active', activePlayer.ActivePlayerTemplate)
}

function _drawFruit() {
  let activeFruit = appState.activeFruit
  setHTML('active-fruit', activeFruit)
}

export class PlayersController {
  constructor() {
    _drawPlayer()
    appState.on('players', _drawPlayer)
    appState.on('activePlayer', _drawActive)
    appState.on('activeFruit', _drawFruit)
  }

  // createPlayer() {
  //       window.event.preventDefault()
  //       console.log("Testing create player")
  //       const form = window.event.target
  //       // console.log(form)
  //       let formData = getFormData(form)
  //       playersService.createPlayer(formData)
  //     }

    setActivePlayer(playerId) {
      console.log('setting', playerId)
      playersService.setActivePlayer(playerId)
      this.selectFruit()
    }

  selectFruit() {
    let fruits = appState.fruits
    let randomFruit = Math.floor(Math.random() * fruits.length)
    appState.activeFruit = fruits[randomFruit]

    // let randomFruit = Math.floor(Math.random() * appState.fruits.length)
    // appState.activeFruit = appState.fruits[randomFruit]
    // console.log(appState.activeFruit, 'fruits')
  }

  async submitAnswer() {
    window.event.preventDefault()
    console.log('test')
    const form = window.event.target
    let formData = getFormData(form)
    if (formData === appState.activeFruit) {
      appState.emit('increaseScore', appState.activePlayer)
      appState.activePlayer.score++
      appState.fruits[randomFruit]
    } else {
      await Pop.toast('Wrong')
    }
  }


}