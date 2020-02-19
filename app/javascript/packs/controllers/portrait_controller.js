import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["image", "changeButton"]
  
  get image() {
    return this.imageTarget
  }

  get changeButton() {
    return this.changeButtonTarget
  }

  async getRandomPicture() {
    let response = await fetch('https://picsum.photos/700/500')
    return response.url
  }

  toggleAvailability() {
    this.changeButton.disabled = !this.changeButton.disabled
    this.image.classList.toggle('disabled')
  }

  async changePicture() {
    this.toggleAvailability()
    this.image.src = await this.getRandomPicture()
    this.toggleAvailability()
  }

}
