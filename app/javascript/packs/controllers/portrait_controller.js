import { Controller } from "stimulus"
const axios = require('axios');
export default class extends Controller {
  static targets = ["image", "changeButton", "author"]

  connect() {
    this.changePicture()
  }
  
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
    const { author } = await this.getimageDetails(this.getIdFromImage())  
    this.authorTarget.innerHTML = author
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

  async getimageDetails(id) {
    let response = await axios.get(`${this.imageProvider}/id/${id}/info`)
    return response.data
  }

}
