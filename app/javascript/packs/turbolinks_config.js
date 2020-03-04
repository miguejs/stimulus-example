Turbolinks.scroll = {}

const turbolinksPersistScroll = () => {  
  if (Turbolinks.scroll['top']) {
    document.scrollingElement.scrollTo(0, Turbolinks.scroll['top'])
    Turbolinks.scroll = {};
  }

  const elements = document.querySelectorAll('[data-turbolinks-scroll]')

  elements.forEach(function(element){
    element.addEventListener('click', () => {
      document.addEventListener("turbolinks:before-render", () => {  
        Turbolinks.scroll['top'] = document.scrollingElement.scrollTop;
      }, { once: true })
    })
  })
}

document.addEventListener('turbolinks:load', turbolinksPersistScroll);
document.addEventListener('turbolinks:render', turbolinksPersistScroll);
