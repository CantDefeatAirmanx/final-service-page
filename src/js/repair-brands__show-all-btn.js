{
  //repair brands
  const repairbrandsList = document.querySelector('.repair-brands__list')
  const repairbrandsShowBtn = document.querySelector('.repair-brands__showbtn')
  const repairbrandsShowBtnTextContainer = repairbrandsShowBtn.querySelector(
    '.repair-brands__showbtn-text'
  )
  const repairbrandsShowBtnImgContainer = repairbrandsShowBtn.querySelector(
    '.repair-brands__showbtn-img-container'
  )

  //repair devices
  const repairdevicesList = document.querySelector('.repair-devices__list')
  const repairdevicesShowBtn = document.querySelector(
    '.repair-devices__showbtn'
  )
  const repairdevicesShowBtnTextContainer = repairdevicesShowBtn.querySelector(
    '.repair-devices__showbtn-text'
  )
  const repairdevicesShowBtnImgContainer = repairdevicesShowBtn.querySelector(
    '.repair-devices__showbtn-img-container'
  )

  function showListHandler(
    selectedBtn,
    selectedList,
    openedListClass,
    closedListClass,
    btnTextContainer,
    btnImgContainer,
    btnImgClassAdded
  ) {
    selectedBtn.addEventListener('click', function () {
      if (selectedList.classList.contains(openedListClass)) {
        selectedList.classList.remove(openedListClass)
        selectedList.classList.add(closedListClass)
        btnTextContainer.textContent = 'Показать все'
        if (btnImgContainer.classList.contains(btnImgClassAdded)) {
          btnImgContainer.classList.remove(btnImgClassAdded)
        }
      } else if (selectedList.classList.contains(closedListClass)) {
        selectedList.classList.remove(closedListClass)
        selectedList.classList.add(openedListClass)
        btnTextContainer.textContent = 'Скрыть'
        btnImgContainer.classList.add(btnImgClassAdded)
      }
    })
  }

  showListHandler(
    repairbrandsShowBtn,
    repairbrandsList,
    'repair-brands__list--opened',
    'repair-brands__list--closed',
    repairbrandsShowBtnTextContainer,
    repairbrandsShowBtnImgContainer,
    'repair-brands__showbtn-img-container--flipped'
  )
  showListHandler(
    repairdevicesShowBtn,
    repairdevicesList,
    'repair-devices__list--opened',
    'repair-devices__list--closed',
    repairdevicesShowBtnTextContainer,
    repairdevicesShowBtnImgContainer,
    'repair-devices__showbtn-img-container-flipped'
  )
}
