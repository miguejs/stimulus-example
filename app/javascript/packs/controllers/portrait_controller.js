import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['image']

  connect() {
    console.log("stimulus is working")
    console.log("image target is ", this.imageTarget)
  }

  changePicture(event) {
    let button = event.currentTarget
    button.disabled = true
    this.imageTarget.classList.add('disabled')

    fetch('https://picsum.photos/700/500').then((response) => {
      this.imageTarget.src = response.url
      this.imageTarget.classList.remove('disabled')
      button.disabled = false
    })
  }
}
