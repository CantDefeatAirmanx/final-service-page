{
  const burgerBtn = document.querySelector('.hamburger-btn')
  const closeburgerBtn = document.querySelector('.close-menu-btn')
  const sidebar = document.querySelector('.side-bar')
  const bodycontent = document.querySelector('.body-content')
  const maincontent = document.querySelector('.main-content')
  const pagecontent = document.querySelector('.page-content')

  console.log(pagecontent.computedStyleMap())

  burgerBtn.addEventListener('click', function () {
    sidebar.classList.add('side-bar--opened')
    pagecontent.setAttribute('style', 'opacity: 0.05')
    bodycontent.setAttribute('style', 'max-height: 900px; overflow: hidden')
  })

  closeburgerBtn.addEventListener('click', function () {
    sidebar.classList.remove('side-bar--opened')
    pagecontent.removeAttribute('style')
    bodycontent.removeAttribute('style')
  })
}
