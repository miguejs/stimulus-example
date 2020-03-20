import { Controller } from 'stimulus'
const axios = require('axios')
export default class extends Controller {
  static targets = ['image', 'changeButton', 'author', 'form']
 
  get url() {
    return this.data.get('url')
  }

  async changePicture(event) {
    this.toggleAvailability()
    this.imageTarget.src = await this.getRamdomPicture()
    this.setImageDetails()
    this.toggleAvailability()
  }

  toggleAvailability() {
    this.changeButtonTarget.disabled = !this.changeButtonTarget.disabled
    this.imageTarget.classList.toggle('disabled')
  }

  async getRamdomPicture(width=700, height=500) {
    const response = await fetch(`${this.url}/${width}/${height}`)
    return response.url
  }

  async setImageDetails() {
    const { author, download_url, id } = await this.getImageDetails()
    this.authorTarget.innerHTML = author
    this.formTarget.portrait_author.value = author
    this.formTarget.portrait_url.value = download_url
    this.formTarget.portrait_pic_id.value = id
  }

  idFromImage() {
    return this.imageTarget.src.split('/')[4]
  }

  async getImageDetails() {
    const id = this.idFromImage()
    const response = await axios.get(`${this.url}/id/${id}/info`)
    return response.data
  }
}
