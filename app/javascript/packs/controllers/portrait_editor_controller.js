import { Controller } from "stimulus"
const axios = require('axios');
export default class extends Controller {
  static targets = ["image", "form"]

  get url() {
    return this.data.get("url")
  }

  set url(value) {
    this.data.set("url", value)
    this.imageTarget.src = value
    this.formTarget.portrait_url.value = value
  }

  async toggleGrayscale(event) {
    const { target: { checked } } = event
    const filter = checked ? '?grayscale': ''
    this.url = await this.getImageWithFilter(filter)
  }

  async getImageWithFilter(filter) {
    let response = await axios.get(`${this.url}${filter}`)
    return response.config.url
  }
}
