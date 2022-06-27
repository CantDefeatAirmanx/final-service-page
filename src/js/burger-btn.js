;(function () {
  const burgerBtn = document.querySelector('.hamburger-btn')
  const closeburgerBtn = document.querySelector('.close-menu-btn')
  const sidebar = document.querySelector('.side-bar')
  const bodycontent = document.querySelector('.body-content')
  // const maincontent = document.querySelector('.main-content')
  const pagecontent = document.querySelector('.page-content')

  console.log(pagecontent.computedStyleMap())

  function closeSidebar() {
    sidebar.classList.remove('side-bar--opened')
    pagecontent.removeAttribute('style')
    bodycontent.removeAttribute('style')
  }

  function openSidebar() {
    sidebar.classList.add('side-bar--opened')
    pagecontent.setAttribute('style', 'opacity: 0.05;')
    bodycontent.setAttribute('style', 'max-height: 900px; overflow: hidden;')
  }

  burgerBtn.addEventListener('click', function () {
    openSidebar()

    pagecontent.addEventListener(
      'click',
      closeSidebar,
      sidebar.classList.contains('side-bar--opened')
    )

    closeburgerBtn.addEventListener('click', closeSidebar)
  })
})()
