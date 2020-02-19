import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "image"]
  connect() {
    console.log("Hello, Stimulus!", this.element)
    console.log("Portrait image is ", this.imageTarget)
  } 
}
