import { Controller } from 'stimulus'
const axios = require('axios')
export default class extends Controller {
  static targets = ['image', 'form']

  get url() {
    return this.data.get('url')
  }

  set url(value) {
    this.data.set('url', value)
    this.imageTarget.src = value
    this.formTarget.portrait_url.value = value
  }
  async toggleGrayscale(event) {
    const { target: { checked }} = event
    if (checked) {
      this.url = await this.getImageWithFilter('?grayscale')
    } else {
      this.url = this.url.replace('?grayscale', '')
    }
  }

  async getImageWithFilter(filter) {
    const response = await axios.get(`${this.url}${filter}`)
    return  response.config.url
  }
}
