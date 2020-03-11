import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['image', 'changeButton']

  async changePicture(event) {
    this.toggleAvailability()
    this.imageTarget.src = await this.getRamdomPicture()
    this.toggleAvailability()
  }

  toggleAvailability() {
    this.changeButtonTarget.disabled = !this.changeButtonTarget.disabled
    this.imageTarget.classList.toggle('disabled')
  }

  async getRamdomPicture() {
    const response = await fetch('https://picsum.photos/700/500')
    return response.url
  }
}
