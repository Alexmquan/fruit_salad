import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"



class PlayersService {

    setActivePlayer(playerId) {
      let foundPlayer = appState.players.find(p => p.id == playerId)
      // console.log(foundPlayer)
      appState.activePlayer = foundPlayer
      console.log(foundPlayer );
    }
    
    submitAnswer(formData) {
      playersService.submitAnswer(formData)
      this.getRandomFruit()
      
    }




  // createPlayer(formData) {
  //   let player = new Player(formData)
  //   appState.players.push(player)
  //   appState.emit('players')
  //   console.log(appState.players)
  // }

}

export const playersService = new PlayersService()