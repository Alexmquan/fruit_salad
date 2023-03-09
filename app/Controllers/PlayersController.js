import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { playersService } from "../Services/PlayersService.js";
import { getFormData } from "../Utils/FormHandler.js"



export class PlayersController {
  constructor() {


  }

  createPlayer() {
    window.event.preventDefault()
    console.log("Testing create player")
    const form = window.event.target
    console.log(form)
    let formData = getFormData(form)
    playersService.createPlayer(formData)
  }
}