let data = 
{
  "data_policy": [
    {"СП": "1234 12345678","ТС": "ДМС","Дата окончания": "14.08.2020","СК": "СК МЕД-АСКЕР","Телефон": "8 (495) 123-45-67"},
    {"СП": "9876 543210","ТС": "ОМС","Дата окончания": "15.02.2021","СК": "СК МЕД-АСКЕР","Телефон": "8 (495) 123-45-67"},
    {"СП": "1234-123456-78","ТС": "ДМС","Дата окончания": "16.04.2022","СК": "СК Рандеву","Телефон": "8 (499) 123-45-68"},
    {"СП": "98-76 5432-10","ТС": "ОМС","Дата окончания": "17.05.2023","СК": "СК Рандеву","Телефон": "8 (499) 123-45-68"},
    {"СП": "12-341234-5678","ТС": "ДМС","Дата окончания": "18.11.2024","СК": "Страх-трах","Телефон": "8 (812) 123-45-69"},
    {"СП": "9876-543210","ТС": "ОМС","Дата окончания": "19.10.2025","СК": "Страх-трах","Телефон": "8 (812) 123-45-69"}
  ],
  "service_checks": [
    {"Услуги включены в страхование":"Первичный приём врачастоматолога терапевта","Услуги не найдены":""},
    {"Услуги включены в страхование":"Полирование челюсти","Услуги не найдены":""},
    {"Услуги включены в страхование":"Снятие камней с 1 зуба","Услуги не найдены":""},
    {"Услуги включены в страхование":"Рентген верхней и нижней челюстей","Услуги не найдены":""},
    {"Услуги включены в страхование":"МРТ грудной клетки","Услуги не найдены":""}
  ],
  "noService_checks": [
    {"Услуги не включены в страхование":"МРТ челюсти"},
    {"Услуги не включены в страхование":"Рентген грудной клетки"},
    {"Услуги не включены в страхование":"Исследование функции внешнего дыхания"},
    {"Услуги не включены в страхование":"Денситометрия"},
    {"Услуги не включены в страхование":"МРТ головного мозга"}
  ],
  "cartImg": [
    {"cart1":"../img/Vector.png",
    "cart2":"../img/kisspng-circle-point-angle-brand-font-u-turn-5b244eac9ab958.2898691515291060926338.png",
    "cart3":"../img/kisspng-computer-icons-question-mark-clip-art-5ad870c4c528a9.7304411815241340848076.png"}
  ]
};

let window__button_OMC = document.querySelector(".window__button_OMC");
let window__button_DMS = document.querySelector(".window__button_DMS");
let input__text_one = document.querySelector(".input__text_one");
let input__text_two = document.querySelector(".input__text_two");
let input__text_fri = document.querySelector(".input__text_fri");
let windows__btn= document.querySelector(".windows__btn");

document.addEventListener("DOMContentLoaded", () => {
  window__button_OMC.classList.add("active");
})

let complectBox = () => {
  data.data_policy.forEach(element => {

    let input__ul_one = document.querySelector(".input__ul_one");

    let input__ul_two = document.querySelector(".input__ul_two");

/////////////////////////////////////////////////////////////////////////

      let block = document.createElement("li");
        block.innerHTML = `
        <a href="#" class="input__items">${element.СП}</a>
        `
        input__ul_one.appendChild(block);

//////////////////////////////////////////////////////////////////////////


      let block_two = document.createElement("li");
      block_two.innerHTML = `
      <a href="#" class="input__items_two">${element.СК}</a>
      `
      input__ul_two.appendChild(block_two);
////////////////////////////////////////////////////////////////////////////
  });

  data.service_checks.forEach((elements) => {
    let input__ul_fri = document.querySelector(".input__ul_fri");


    let block_fri = document.createElement("li");
    block_fri.innerHTML = `
    <a href="#" class="input__items_fri">${elements["Услуги включены в страхование"]}</a>
    `
    input__ul_fri.appendChild(block_fri);
  });
  data.noService_checks.forEach((element) => {
    let input__ul_fri = document.querySelector(".input__ul_fri");


    let block_fri = document.createElement("li");
    block_fri.innerHTML = `
    <a href="#" class="input__items_fri">${element["Услуги не включены в страхование"]}</a>
    `
    input__ul_fri.appendChild(block_fri);
  })

}

complectBox();

let window__block = document.querySelector(".window__block");
let messeg__error = document.querySelector(".messeg__error");
let messeg__error_off= document.querySelector(".messeg__error_off");
let input__items = document.querySelectorAll(".input__items");
let input__items_two = document.querySelectorAll(".input__items_two");
let input__items_fri = document.querySelectorAll(".input__items_fri");

let input__info = () => {
  input__items.forEach(element => {
    element.addEventListener("click", () => {
      input__text_one.value = element.innerHTML;
      let filteredResult__one = data.data_policy.filter(function( obj ) {
        return obj.СП === input__text_one.value;
    });
    input__text_two.value = filteredResult__one[0].СК

    if(filteredResult__one[0].ТС === "ОМС") {
      window__button_OMC.classList.add("active");
      window__button_DMS.classList.remove("active");
    }
    else if(filteredResult__one[0].ТС === "ДМС") {
      window__button_DMS.classList.add("active");
      window__button_OMC.classList.remove("active");
    }
      document.querySelector(".block__elem").style.display = "none";
      input__text_one.classList.remove("border__input");
      input__text_one.style.border = "1px solid #868686";
    });
  });
  input__items_two.forEach(item => {
    item.addEventListener("click", () => {
      input__text_two.value = item.innerHTML;


      document.querySelector(".block__elem_two").style.display = "none";
      input__text_two.classList.remove("border__input");
      input__text_two.style.border = "1px solid #868686";
    });
  });
  
  input__items_fri.forEach(elements => {
    elements.addEventListener("click", () => {
      input__text_fri.value = elements.innerHTML;
      let elem = () => {
        let input__services = document.querySelector(".input__services");
  
  
        let block_services = document.createElement("div");
        block_services.classList.add("services___flex");
        block_services.innerHTML = `
        <img class="input__img_icons" alt="">
        <p class="input__flex_text">${elements.innerHTML}</p>
        <span class="input__services_off">&times;</span>
        `
        input__services.appendChild(block_services);
      }
      elem();

      let remove = () => {
        let input__services_off = document.querySelectorAll(".input__services_off");
        input__services_off.forEach((off, numer) => {
          off.addEventListener("click", () => {
            off.parentNode.parentNode.removeChild(off.parentNode);
          });
        });
      }
      remove();
      document.querySelector(".block__elem_fri").style.display = "none";
      input__text_fri.classList.remove("border__input");
      input__text_fri.style.border = "1px solid #868686";
    });
  });
}
input__info();


let error = () => {
  windows__btn.addEventListener('click', (event) => {
    event.preventDefault();
    let filteredResult__one = data.data_policy.filter(function( obj ) {
        return obj.СП === input__text_one.value;
    });
    let filteredResult__two = data.data_policy.filter(function( obj ) {
      return obj.СК === input__text_two.value;
    });

    if(filteredResult__one[0] == undefined  || filteredResult__two[0] == undefined) {
      window__block.style.display = "none";
      messeg__error.style.display = "flex";
    }
    else{
      let input__dataText = document.querySelector(".input__dataText");
      let input__telefon = document.querySelector(".input__telefon");
      let input__img_icons = document.querySelectorAll(".input__img_icons")
      let input__flex_text = document.querySelectorAll(".input__flex_text") 
      input__dataText.innerHTML = `Дата окончания: ${filteredResult__one[0]["Дата окончания"]}`;
      input__telefon.innerHTML = `Телефон: ${filteredResult__two[0]["Телефон"]}`;



      windows__btn.style.display = "none";
      let new__button_search = document.querySelector(".new__button_search");
      new__button_search.style.display = "block"
      new__button_search.addEventListener("click", (e) => {
        windows__btn.style.display = "block";
        new__button_search.style.display = "none"
        e.preventDefault();
         input__telefon.innerHTML = "";
         input__dataText.innerHTML = "";
         input__text_one.value = "";
         input__text_two.value = "";
         input__text_fri.value = "";
         let input__services = document.querySelector(".input__services");
         let services___flex = document.querySelectorAll(".services___flex");
         services___flex.forEach((elements) => {
          input__services.removeChild(elements)
         })
      });
    }
  })
  messeg__error_off.addEventListener('click', () => {
    event.preventDefault();
    window__block.style.display = "flex";
    messeg__error.style.display = "none";
  });
}

error();

/*ввод данных*/

//////////////////////////////////////////////////////////////

input__text_one.addEventListener("keyup", (e) => {

  if(input__text_one.value == '') {
    document.querySelector(".block__elem").style.display = "none";
    input__text_one.classList.remove("border__input");
    input__text_one.style.border = "1px solid #868686";
  }
  else {
    document.querySelector(".block__elem").style.display = "flex";
    input__text_one.classList.add("border__input");
    input__text_one.style.border = "1px solid #04e0e7";
  }
  let input__ul = document.querySelector(".input__ul_one");
  let filter = input__text_one.value.toUpperCase();
  let li = input__ul.getElementsByTagName("li");
  for(let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if(txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    }
    else {
      li[i].style.display = "none";
    }
  }
})


input__text_two.addEventListener("keyup", (e) => {

  if(input__text_two.value == '') {
    document.querySelector(".block__elem_two").style.display = "none";
    input__text_two.classList.remove("border__input");
    input__text_two.style.border = "1px solid #868686";
  }
  else {
    document.querySelector(".block__elem_two").style.display = "flex";
    input__text_two.classList.add("border__input");
    input__text_two.style.border = "1px solid #04e0e7";
  }
  let input__ul = document.querySelector(".input__ul_two");
  let filter = input__text_two.value.toUpperCase();
  let li = input__ul.getElementsByTagName("li");
  for(let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if(txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    }
    else {
      li[i].style.display = "none";
    }
  }
})

input__text_fri.addEventListener("keyup", (e) => {

  if(input__text_fri.value == '') {
    document.querySelector(".block__elem_fri").style.display = "none";
    input__text_fri.classList.remove("border__input");
    input__text_fri.style.border = "1px solid #868686";
  }
  else {
    document.querySelector(".block__elem_fri").style.display = "flex";
    input__text_fri.classList.add("border__input");
    input__text_fri.style.border = "1px solid #04e0e7";
  }
  let input__ul = document.querySelector(".input__ul_fri");
  let filter = input__text_fri.value.toUpperCase();
  let li = input__ul.getElementsByTagName("li");
  for(let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if(txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    }
    else {
      li[i].style.display = "none";
    }
  }
})