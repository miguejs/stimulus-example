import { Controller } from 'stimulus'
export default class extends Controller {

  connect() {
    console.log('works');
    const body = document.querySelector('body') 
    const modal = document.querySelector('.modal') 
    modal.classList.toggle('opacity-0') 
    modal.classList.toggle('pointer-events-none') 
    body.classList.toggle('modal-active')
  }
}
