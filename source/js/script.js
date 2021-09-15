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
};
startMobileMenu();

const showDescription = function () {
  const route1 = document.querySelector(".routes__item-content--greece");
  const route2 = document.querySelector(".routes__item-content--albania");
  const route3 = document.querySelector(".routes__item-content--macedonia");
  const route4 = document.querySelector(".routes__item-content--montenegro");
  const route5 = document.querySelector(".routes__item-content--croatia");

  const select1 = document.querySelector(".selection__button--greece");
  const select2 = document.querySelector(".selection__button--albania");
  const select3 = document.querySelector(".selection__button--macedonia");
  const select4 = document.querySelector(".selection__button--montenegro");
  const select5 = document.querySelector(".selection__button--croatia");

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
  };

  const showRoute3 = function () {
    buttonsSelect.forEach(function (sel) {
      sel.classList.remove("selection__button--active");
    });
    select3.classList.add("selection__button--active");

    descriptionSelect.forEach(function (des) {
      des.classList.remove("selection__description-item--active");
    });
    description3.classList.add("selection__description-item--active");
  };

  const showRoute4 = function () {
    buttonsSelect.forEach(function (sel) {
      sel.classList.remove("selection__button--active");
    });
    select4.classList.add("selection__button--active");

    descriptionSelect.forEach(function (des) {
      des.classList.remove("selection__description-item--active");
    });
    description4.classList.add("selection__description-item--active");
  };

  const showRoute5 = function () {
    buttonsSelect.forEach(function (sel) {
      sel.classList.remove("selection__button--active");
    });
    select5.classList.add("selection__button--active");

    descriptionSelect.forEach(function (des) {
      des.classList.remove("selection__description-item--active");
    });
    description5.classList.add("selection__description-item--active");
  };

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

const popupsAct = function () {
  const buttonsBuy = document.querySelectorAll(".button__buy");
  const popupOrder = document.querySelector(".popup__order-wrapper");
  const inputFocus = document.querySelector(".popup__order-input-phone");
  const buttonSuccesClose = document.querySelector(".popup__succes-button-close");
  const buttonsOrderClose = document.querySelector(".popup__order-button-close");
  const popupSucces = document.querySelector(".popup__succes-wrapper");
  const feedbackButton = document.querySelector(".feedback__form");
  const buttonSend = document.querySelector(".popup__order-form");

  const showPopups = function () {
    buttonsBuy.forEach(function (button) {
      button.addEventListener("click", function () {
        popupOrder.classList.remove("popup__order-wrapper--deactive");
        inputFocus.focus();
      })
    })

    buttonSend.addEventListener("submit", function (evt) {
      evt.preventDefault();
      popupOrder.classList.add("popup__order-wrapper--deactive");
      popupSucces.classList.remove("popup__succes-wrapper--deactive");
    });
  };
  showPopups();

  const closePopups = function () {
    buttonSuccesClose.addEventListener("click", function () {
      popupSucces.classList.add("popup__succes-wrapper--deactive");
    });

    buttonsOrderClose.addEventListener("click", function () {
      popupOrder.classList.add("popup__order-wrapper--deactive");
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        popupOrder.classList.add("popup__order-wrapper--deactive");
        popupSucces.classList.add("popup__succes-wrapper--deactive");
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target === popupOrder) {
        popupOrder.classList.add("popup__order-wrapper--deactive");
      };
    });

    document.addEventListener("click", function (e) {
      if (e.target === popupSucces) {
        popupSucces.classList.add("popup__succes-wrapper--deactive");
      };
    });
  }
  closePopups();

  const sendFeedback = function () {
    feedbackButton.addEventListener("submit", function (evt) {
      evt.preventDefault();
      popupSucces.classList.remove("popup__succes-wrapper--deactive");
    });
  };
  sendFeedback();

}
popupsAct();

const validateInputs = function () {
  const inputPhoneFeedback = document.querySelector(".input__phone-feedback");
  const inputMailFeedback = document.querySelector(".input__email-feedback");
  const labelPhoneFeedback = document.querySelector(".input__validate-label-telephone-feedback");
  const labelMailFeedback = document.querySelector(".input__validate-label-email-feedback");
  const labelPhonePopup = document.querySelector(".input__validate-label-popup-telephone");
  const labelMailPopup = document.querySelector(".input__validate-label-popup-email");
  const inputPhonePopup = document.querySelector(".popup__order-input-phone");
  const inputMailPopup = document.querySelector(".popup__order-input-email");

  const phonePattern = /^\d{10}$/;
  const emailPannern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  const validatePhoneFeedbackInput = function () {
    inputPhoneFeedback.addEventListener('change', function () {
      if (!inputPhoneFeedback.value.match(phonePattern)) {
        inputPhoneFeedback.classList.add("input__phone--invalid");
        labelPhoneFeedback.classList.add("input__validate-label-telephone--active");
      }
      else {
        inputPhoneFeedback.classList.remove("input__phone--invalid");
        labelPhoneFeedback.classList.remove("input__validate-label-telephone--active");
      };
    });
  }
  validatePhoneFeedbackInput();

  const validateEmailFeedbackInput = function () {
    inputMailFeedback.addEventListener('change', function () {
      if (!inputMailFeedback.value.match(emailPannern)) {
        inputMailFeedback.classList.add("input__email--invalid");
        labelMailFeedback.classList.add("input__validate-label-email--active");
      }
      else {
        inputMailFeedback.classList.remove("input__email--invalid");
        labelMailFeedback.classList.remove("input__validate-label-email--active");
      };
    });
  }
  validateEmailFeedbackInput();

  const validatePhonePopupInput = function () {
    inputPhonePopup.addEventListener('change', function () {
      if (!inputPhonePopup.value.match(phonePattern)) {
        inputPhonePopup.classList.add("input__phone--invalid");
        labelPhonePopup.classList.add("input__validate-label-telephone--active");
      }
      else {
        inputPhonePopup.classList.remove("input__phone--invalid");
        labelPhonePopup.classList.remove("input__validate-label-telephone--active");
      };
    });
  }
  validatePhonePopupInput();

  const validateEmailPopupInput = function () {
    inputMailPopup.addEventListener('change', function () {
      if (!inputMailPopup.value.match(emailPannern)) {
        inputMailPopup.classList.add("input__email--invalid");
        labelMailPopup.classList.add("input__validate-label-email--active");
      }
      else {
        inputMailPopup.classList.remove("input__email--invalid");
        labelMailPopup.classList.remove("input__validate-label-email--active");
      };
    });
  }
  validateEmailPopupInput();
};
validateInputs();
