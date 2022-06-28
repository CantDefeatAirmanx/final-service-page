;(function () {
  const textContainer = document.querySelector('.description__text-container')
  const textItems = document.querySelectorAll('.description__text')
  const hiddenSpan = document.querySelector('.description__text--768hidden')
  const showBtn = document.querySelector('.description__showbtn')
  const showBtnImgContainer = document.querySelector(
    '.description__showbtn-img-container'
  )

  function revealHiddenText() {
    if (
      !textContainer.classList.contains('description__text-container--opened')
    ) {
      for (let i = 0; i < textItems.length; i++) {
        textItems[i].setAttribute('style', 'display:block')
      }
      hiddenSpan.setAttribute('style', 'display:inline')
      textContainer.classList.add('description__text-container--opened')
      showBtnImgContainer.classList.add(
        'description__showbtn-img-container--flipped'
      )
    } else {
      for (let i = 0; i < textItems.length; i++) {
        textItems[i].removeAttribute('style')
      }
      hiddenSpan.removeAttribute('style')
      textContainer.classList.remove('description__text-container--opened')
      showBtnImgContainer.classList.remove(
        'description__showbtn-img-container--flipped'
      )
    }
  }

  showBtn.addEventListener('click', revealHiddenText)
})()
