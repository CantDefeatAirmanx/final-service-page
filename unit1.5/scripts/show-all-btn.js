{
   const brandsList = document.querySelector(".repair-brands__list");
   const listHandlerBtn = document.querySelector(".repair-brands__showbtn");
   const listHandlerBtnText = listHandlerBtn.querySelector('.repair-brands__showbtn-text');

   listHandlerBtn.addEventListener("click", function () {
      if (brandsList.classList.contains("repair-brands__list--opened")) {
         brandsList.classList.remove("repair-brands__list--opened");
         brandsList.classList.add("repair-brands__list--closed");
         listHandlerBtnText.textContent = 'Показать все';
      } 

      else if (brandsList.classList.contains("repair-brands__list--closed")) {
         brandsList.classList.remove("repair-brands__list--closed");
         brandsList.classList.add("repair-brands__list--opened");
         listHandlerBtnText.textContent = 'Скрыть';
      }
   });
}
