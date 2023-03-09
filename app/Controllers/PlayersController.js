import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { playersService } from "../Services/PlayersService.js";
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js";

function _drawPlayer() {
  const players = appState.players
  let template = ''
  players.forEach(p => template += p.PlayerTemplate)
  setHTML('players', template)
}

function _drawActive() {
  let activePlayer = appState.activePlayer
  setHTML('active', activePlayer.ActiveTemplate)
}

function _drawFruit() {
  let activeFruit = 
}

export class PlayersController {
  constructor() {
    this.selectFruit()
    _drawPlayer()
    appState.on('activePlayer', _drawActive)
    appState.on('')

  }


  selectFruit() {
    let newFruit = Math.floor(Math.random() * appState.fruits.length)
    appState.activeFruit = appState.fruits[newFruit]
    console.log(appState.activeFruit)
  }
  createPlayer() {
    window.event.preventDefault()
    console.log("Testing create player")
    const form = window.event.target
    console.log(form)
    let formData = getFormData(form)
    playersService.createPlayer(formData)
  }

  setActivePlayer(player) {
    playersService.setActivePlayer(player)
  }
}