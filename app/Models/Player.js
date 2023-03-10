import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Player {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.score = data.score
  }

  get PlayerTemplate() {
    return ` 
    <h4 onclick="app.playersController.setActivePlayer('${this.id}')">${this.name}</h4>
    `
  }

  get ActivePlayerTemplate() {
    return `
    <div   class="col-5 card elevation-2 mb-5">
    <div  class="row p-4 ">
    <div class="col-12 d-md-flex justify-content-between">
    <h4>${this.name}</h4>
    <h4>Score: <span>${this.score}</span></h4>
    </div>
    </div>
    </div>


    <form onsubmit="app.playersController.submitAnswer()"  class="col-10 bg-white rounded elevation-2 p-5 text-center">
    <h2 id="active-fruit">${appState.activeFruit}</h2>
    <input id="fruit-input" type="text" class="form-control mt-5" placeholder="Type here..."/>
    </form>
    `
  }



  // get FruitTemplate() {
  //   return `
  //   <h2>${this.name}
  //   <h2>${appState.activeFruit}</h2>`
  // }
}