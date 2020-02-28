import { Controller } from "stimulus"
const axios = require('axios');
export default class extends Controller {
  static targets = ["image", "changeButton", "author", "authorInput", "form"]

  get image() {
    return this.imageTarget
  }

  get imageProvider() {
    return `${this.data.get('imageProvider')}`
  } 

  get changeButton() {
    return this.changeButtonTarget
  }

  async getRandomPicture(width =700, height=500) {
    let response = await fetch(`${this.imageProvider}/${width}/${height}`)
    return response.url
  }

  toggleAvailability() {
    this.changeButton.disabled = !this.changeButton.disabled
    this.image.classList.toggle('disabled')
  }

   async setImageDetails() {
    const { id, author, download_url } = await this.getimageDetails()  
    this.authorTarget.innerHTML = author
    this.formTarget.portrait_author.value = author
    this.formTarget.portrait_url.value = download_url
    this.formTarget.portrait_url.pic_id = id
  }

  getIdFromImage() {
   return this.image.src.split('/')[4]
  }

  async changePicture() {
    this.toggleAvailability()
    this.image.src = await this.getRandomPicture()
    await this.setImageDetails()

    this.toggleAvailability()
  }

  async getimageDetails() {
    const id = this.getIdFromImage()
    let response = await axios.get(`${this.imageProvider}/id/${id}/info`)
    return response.data
  }
}
