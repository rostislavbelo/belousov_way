const startMobileMenu = function () {
  const buttonMenu = document.querySelector(".mobile-menu__button");
  const menuActivate = document.querySelector(".mobile-menu__elements");

  window.onload = function () {
    buttonMenu.classList.remove("mobile-menu__button--active");
    menuActivate.classList.remove("mobile-menu__elements--active");

    buttonMenu.addEventListener("click", function () {
      buttonMenu.classList.toggle("mobile-menu__button--active");
      menuActivate.classList.toggle("mobile-menu__elements--active");
    });
  };
}

startMobileMenu();

const showDescription = function () {
  const route1 = document.querySelector(".js__transition--greece");
  const route2 = document.querySelector(".js__transition--albania");
  const route3 = document.querySelector(".js__transition--macedonia");
  const route4 = document.querySelector(".js__transition--montenegro");
  const route5 = document.querySelector(".js__transition--croatia");

  const select1 = document.querySelector(".js__show--greece");
  const select2 = document.querySelector(".js__show--albania");
  const select3 = document.querySelector(".js__show--macedonia");
  const select4 = document.querySelector(".js__show--montenegro");
  const select5 = document.querySelector(".js__show--croatia");

  const description1 = document.querySelector(".selection__description-item--greece");
  const description2 = document.querySelector(".selection__description-item--albania");
  const description3 = document.querySelector(".selection__description-item--macedonia");
  const description4 = document.querySelector(".selection__description-item--montenegro");
  const description5 = document.querySelector(".selection__description-item--croatia");

  const buttonsSelect = document.querySelectorAll(".selection__button");
  const descriptionSelect = document.querySelectorAll(".selection__description-item");

  const showRoute1 = function () {
    buttonsSelect.forEach(function (sel) {
      sel.classList.remove("selection__button--active");
    });
    select1.classList.add("selection__button--active");

    descriptionSelect.forEach(function (des) {
      des.classList.remove("selection__description-item--active");
    });
    description1.classList.add("selection__description-item--active");
  }

  const showRoute2 = function () {
    buttonsSelect.forEach(function (sel) {
      sel.classList.remove("selection__button--active");
    });
    select2.classList.add("selection__button--active");

    descriptionSelect.forEach(function (des) {
      des.classList.remove("selection__description-item--active");
    });
    description2.classList.add("selection__description-item--active");
  }

  const showRoute3 = function () {
    buttonsSelect.forEach(function (sel) {
      sel.classList.remove("selection__button--active");
    });
    select3.classList.add("selection__button--active");

    descriptionSelect.forEach(function (des) {
      des.classList.remove("selection__description-item--active");
    });
    description3.classList.add("selection__description-item--active");
  }

  const showRoute4 = function () {
    buttonsSelect.forEach(function (sel) {
      sel.classList.remove("selection__button--active");
    });
    select4.classList.add("selection__button--active");

    descriptionSelect.forEach(function (des) {
      des.classList.remove("selection__description-item--active");
    });
    description4.classList.add("selection__description-item--active");
  }

  const showRoute5 = function () {
    buttonsSelect.forEach(function (sel) {
      sel.classList.remove("selection__button--active");
    });
    select5.classList.add("selection__button--active");

    descriptionSelect.forEach(function (des) {
      des.classList.remove("selection__description-item--active");
    });
    description5.classList.add("selection__description-item--active");
  }

  route1.addEventListener("click", function () {
    showRoute1();
  });

  select1.addEventListener("click", function () {
    showRoute1();
  });

  route2.addEventListener("click", function () {
    showRoute2();
  });

  select2.addEventListener("click", function () {
    showRoute2();
  });

  route3.addEventListener("click", function () {
    showRoute3();
  });

  select3.addEventListener("click", function () {
    showRoute3();
  });

  route4.addEventListener("click", function () {
    showRoute4();
  });

  select4.addEventListener("click", function () {
    showRoute4();
  });

  route5.addEventListener("click", function () {
    showRoute5();
  });

  select5.addEventListener("click", function () {
    showRoute5();
  });

};

showDescription();

const showPopup = function () {
  const buttonsBuy = document.querySelectorAll(".button__buy");
  const popup = document.querySelector(".popup__order-wrapper");
  const inputFocus = document.querySelector(".popup__order-input-phone");

  const buttonSend = document.querySelector(".popup__order-form");
  const popupSucces = document.querySelector(".popup__succes-wrapper");


  buttonsBuy.forEach(function (button) {
    button.addEventListener("click", function () {
      popup.classList.remove("popup__order-wrapper--deactive");
      inputFocus.focus();
    })
  })

  buttonSend.addEventListener("submit", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup__order-wrapper--deactive");
    popupSucces.classList.remove("popup__succes-wrapper--deactive")
  })
}

showPopup();

const closePopup = function () {
  const buttonSuccesClose = document.querySelector(".popup__succes-button-close");
  const buttonsOrderClose = document.querySelector(".popup__order-button-close");
  const popupOrder = document.querySelector(".popup__order-wrapper");
  const popupSucces = document.querySelector(".popup__succes-wrapper");

  buttonSuccesClose.addEventListener("click", function () {
    popupSucces.classList.add("popup__succes-wrapper--deactive");
  })

  buttonsOrderClose.addEventListener("click", function () {
    popupOrder.classList.add("popup__order-wrapper--deactive");
  })

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      popupOrder.classList.add("popup__order-wrapper--deactive");
      popupSucces.classList.add("popup__succes-wrapper--deactive");
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target === popupOrder) {
     // popupOrder.classList.add("popup__order-wrapper--deactive");
      popupSucces.classList.add("popup__succes-wrapper--deactive");
    }
  });
}

closePopup();
