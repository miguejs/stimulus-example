import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "image"]
  connect() {
    console.log("Hello, Stimulus!", this.element)
    console.log("Portrait image is ", this.imageTarget)
  }

  changePicture(event) {
    console.log("Fired Event", event)
    console.log("Element with the data action", event.currentTarget)
    var button = event.currentTarget

    button.disabled = true
    this.imageTarget.classList.add('disabled')

    fetch('https://picsum.photos/700/500').then((response) => {
      this.imageTarget.src = response.url
      
      this.imageTarget.classList.remove('disabled')
      button.disabled = false
    })
  }
}
