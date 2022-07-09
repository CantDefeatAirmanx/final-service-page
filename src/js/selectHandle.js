;(() => {
  const navbarListItems = document.querySelectorAll('.nav-bar__link')
  const sidebarListItems = document.querySelectorAll('.side-bar__nav-link')

  function addListEventHandler(el, collection, activeClass) {
    el.addEventListener('click', () => {
      ;[...collection].forEach((el) => {
        el.classList.remove(activeClass)
      })
      el.classList.add(activeClass)
    })
  }

  function listHandle(collection, activeClass) {
    for (let i = 0; i < collection.length; i++) {
      addListEventHandler(collection[i], collection, activeClass)
    }
  }

  listHandle(navbarListItems, 'nav-bar__link--active')
  listHandle(sidebarListItems, 'side-bar__nav-link--active')
})()
