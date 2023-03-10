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
    <h4 onclick="app.playersController.setActivePlayer('${this.name}')">${this.name}</h4>`
  }

  get ActiveTemplate() {
    return `
    <div class="col-6 ">
                  <p>${this.name}</p>
                </div>
                <div class="col-6">
                  <p>Score: <span>${this.score}</span></p>
                </div>

                <section class="row">
                <div class="col-10">
                  <div class="card elevation-3 text-center" id="fruit">
                    <!-- <h2>${appState.activeFruit}</h2> -->
                    <textarea name="" id="" cols="5" rows="5"></textarea>
                  </div>
                </div>
              </section>
    `
  }

  // get FruitTemplate() {
  //   return `
  //   <h2>${this.name}
  //   <h2>${appState.activeFruit}</h2>`
  // }
}