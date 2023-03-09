import { generateId } from "../Utils/generateId.js"

export class Player {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.score = data.score
  }

  get PlayerTemplate() {
    return `
    <h4 onclick="app.playersController.setActivePlayer('${this.name}')">${this.name}</h4>`
  }

  get ActiveTemplate() {
    return `
    `
  }
}