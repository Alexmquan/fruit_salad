import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"



class PlayersService {


  createPlayer(formData) {
    let player = new Player(formData)
    appState.players.push(player)
    appState.emit('players')
    console.log(appState.players)
  }

  setActivePlayer(activePlayer) {
    let foundPlayer = appState.players.find(p => p.name == activePlayer)
    appState.activePlayer = foundPlayer
  }
}

export const playersService = new PlayersService()