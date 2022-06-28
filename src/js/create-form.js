;(function () {
  const formContent = document.querySelector('#form-template').content
  const callBtns = document.querySelectorAll('.call-btn')
  const chatBtns = document.querySelectorAll('.chat-btn')
  const newFormTemplate = formContent.querySelector('.form-container')
  const formDestination = document.querySelector('.form-wrapper')
  // const formCloseBtn = document.querySelector('.form-container__close-btn')
  const pagecontent = document.querySelector('.page-content')
  const bodycontent = document.querySelector('.body-content')
  const sidebar = document.querySelector('.side-bar')

  //creating forms out of template

  function createForm(heading, removingItemsArray) {
    let result = newFormTemplate.cloneNode(true)

    if (removingItemsArray) {
      let inputsArray = result.querySelectorAll('.form__input')
      for (let i = 0; i < inputsArray.length; i++) {
        for (let j = 0; j < removingItemsArray.length; j++) {
          if (inputsArray[i].classList.contains(removingItemsArray[j])) {
            inputsArray[i].remove()
          }
        }
      }
    }
    result.querySelector('.form__heading').textContent = heading

    return result
  }

  const feedBackForm = createForm('Обратная связь')
  const callForm = createForm('Заказать звонок', [
    'form__name',
    'form__email',
    'form__textarea'
  ])

  // setting up form's opening/closing logic

  function openForm() {
    if (sidebar.classList.contains('side-bar--opened')) {
      sidebar.classList.remove('side-bar--opened')
    }
    if (formDestination.childElementCount > 0) {
      formDestination.firstChild.remove()
    }
    // ^^ условие для ситуации последовательных кликов на оба типа кнопок
    // с незакрывающегося на большом разрешении сайд-бара, блокировать pointer-events либо
    // еще что-то выдумывать не стал, поскольку думаю,
    // что удобно моментально переключиться на другую форму

    formDestination.classList.add('form-wrapper--opened')
    pagecontent.setAttribute('style', 'opacity: 0.05;')
    bodycontent.setAttribute('style', 'max-height: 940px; overflow: hidden;')
  }

  function closeForm() {
    formDestination.classList.remove('form-wrapper--opened')
    pagecontent.removeAttribute('style')
    bodycontent.removeAttribute('style')
    setTimeout(() => {
      formDestination.firstChild.remove()
    }, 250)
  }

  function formsHandle(btnsArray, form) {
    for (let i = 0; i < btnsArray.length; i++) {
      btnsArray[i].addEventListener('click', function () {
        openForm()
        formDestination.appendChild(form)

        pagecontent.addEventListener(
          'click',
          () => {
            if (!formDestination.classList.contains('form-wrapper--opened')) {
              pagecontent.removeEventListener('click', this)
            } else closeForm()
          },
          formDestination.classList.contains('form-wrapper--opened')
        )

        form
          .querySelector('.form-container__close-btn')
          .addEventListener('click', closeForm)
      })
    }
  }

  formsHandle(callBtns, callForm)
  formsHandle(chatBtns, feedBackForm)
})()
