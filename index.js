console.log('Результаты самопроверки:\n1.Слайдер сделан в обеих версиях (десктоп и мобильный)(+50);\n2.Нажатие на кнопку Login (Account в мобильной версии) вызывает pop-up. Pop-up закрывается по клику вне него. При нажатии кнопки sign in происходит браузерный alert с данными Email и pass. (+50);\n3.Нажатие на register изменяет слжержимое pop-up.(+25).');

/* Burger menu */

const mobileMenuIcon = document.querySelector('.header__mobile-hamburger');
const mobileMenuLine = document.querySelectorAll('.header__mobile-hamburger-line');
const mobileNavMenu = document.querySelector('.header__mobile-navigation');
const mobileNavMenuClose = document.querySelector('.header__mobile-navigation-cross');

function mobileMenu() {
  mobileMenuIcon.classList.add('open');
  mobileNavMenu.classList.add('open');
  mobileNavMenuClose.classList.add('open');
}

function removeOpen() {
  mobileMenuIcon.classList.remove('open');
  mobileNavMenu.classList.remove('open');
  mobileNavMenuClose.classList.remove('open');
}

document.addEventListener ('click', (e) => {
  if (e.target === mobileMenuIcon || e.target === mobileMenuLine[0] || e.target === mobileMenuLine[1] || e.target === mobileMenuLine[2])  {
    mobileMenu();
  } else if (e.target !== e.currentTarget) {
    removeOpen();
  }
  return;
});

/* Pop-up open & closed */

const loginButton = document.querySelector('.header__button');
const popUp = document.querySelector('.pop-up');
const popUpContent = document.querySelector('.pop-up__content');
const signInButton = document.querySelector('.pop-up__content-sign-button');
const accountButton = document.getElementById('burgerlogin');

loginButton.addEventListener('click', () => {
  popUp.classList.toggle('hidden');
  popUpContent.classList.toggle('pop-up__content_open');
});

accountButton.addEventListener('click', () => {
  popUp.classList.toggle('hidden');
  popUpContent.classList.toggle('pop-up__content_open');
});

popUp.addEventListener('click', (event) => {
  if (event.target.classList.contains('pop-up')) {
    popUp.classList.toggle('hidden');
    popUpContent.classList.toggle('pop-up__content_open');
  }
});

signInButton.addEventListener('click', () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  alert(`Your Login Email: ${email.value}\nYour Login Password: ${password.value}`);
  email.value = '';
  password.value = '';
});

/* Pop-up changed */

const popUpheadling = document.querySelector('.pop-up__content-heading');
const popUpFacebookButton = document.querySelector('.pop-up__content-facebook-button');
const popUpGoggleButton = document.querySelector('.pop-up__content-google-button');
const popUpOrLine = document.querySelector('.pop-up__content-or-element');
const popUpForgotPass = document.querySelector('.pop-up__content-forgotpass');
const popUpRegister = document.querySelector('.pop-up__content-account-resiterlog');
const popUpContentAcc = document.getElementById('registerlogin');
const emailPassDiv = document.querySelector('.pop-up__content-email-password');

const registerClick = () => {
  popUpFacebookButton.classList.toggle('pop-up_hidden-element');
  popUpGoggleButton.classList.toggle('pop-up_hidden-element');
  popUpOrLine.classList.toggle('pop-up_hidden-element');
  popUpForgotPass.classList.toggle('pop-up_hidden-element');
  emailPassDiv.classList.toggle('pop-up__content-email-password_register-margin');
  popUpheadling.innerHTML = 'Create account';
  signInButton.innerHTML = 'Sign Up';
  popUpContentAcc.innerHTML = 'Already have an account?';
  popUpRegister.innerHTML = 'Log in';
  popUpContent.classList.toggle('pop-up__content_register');
};

const logInClick = () => {
  popUpFacebookButton.classList.toggle('pop-up_hidden-element');
  popUpGoggleButton.classList.toggle('pop-up_hidden-element');
  popUpOrLine.classList.toggle('pop-up_hidden-element');
  popUpForgotPass.classList.toggle('pop-up_hidden-element');
  emailPassDiv.classList.toggle('pop-up__content-email-password_register-margin');
  popUpheadling.innerHTML = 'Log in to your account';
  signInButton.innerHTML = 'Sign In';
  popUpContentAcc.innerHTML = 'Don`t have an account?';
  popUpRegister.innerHTML = 'Register';
  popUpContent.classList.toggle('pop-up__content_register');
};

popUpRegister.addEventListener('click', (event) => {
  if (popUpRegister.innerHTML.trim() === 'Register') {
    registerClick();
  } else if (popUpRegister.innerHTML.trim() === 'Log in') {
    logInClick();
  }
});

/* Slider desktop v1 */

// const leftDesktopSliderButton = document.getElementById('left-button-desktop');
// const rightDesktopSliderButton = document.getElementById('right-button-desktop');
// const slider = document.querySelector('.destinations__slider');
// const sliderBlock = document.querySelectorAll('.destinations__slider-block');
// const inputBlock = document.querySelectorAll('.destinations__slidebar-label');

// const leftMove = () => {
//   slider.classList.add('transition-right-move');
//   leftDesktopSliderButton.removeEventListener('click', leftMove);
//   rightDesktopSliderButton.removeEventListener('click', rightMove);
// };

// const rightMove = () => {
//   slider.classList.add('transition-left-move');
//   leftDesktopSliderButton.removeEventListener('click', leftMove);
//   rightDesktopSliderButton.removeEventListener('click', rightMove);
// };

// leftDesktopSliderButton.addEventListener('click', leftMove);
// rightDesktopSliderButton.addEventListener('click', rightMove);

// const leftMoveFunc = () => {
//   slider.classList.remove('transition-right-move');
//   const leftleftItem = document.getElementById('left-left-item').innerHTML;
//   const leftItem = document.getElementById('left-item').innerHTML;
//   const centerItem = document.getElementById('center-item').innerHTML;
//   const rightItem = document.getElementById('right-item').innerHTML;
//   const rightRightItem = document.getElementById('right-right-item').innerHTML;
//   document.getElementById('center-item').innerHTML = leftItem;
//   document.getElementById('right-item').innerHTML = centerItem;
//   document.getElementById('left-item').innerHTML = rightItem;
//   document.getElementById('left-left-item').innerHTML = centerItem;
//   document.getElementById('right-right-item').innerHTML = leftItem;
// };

// const rightMoveFunc = () => {
//   slider.classList.remove('transition-left-move');
//   const leftleftItem = document.getElementById('left-left-item').innerHTML;
//   const leftItem = document.getElementById('left-item').innerHTML;
//   const centerItem = document.getElementById('center-item').innerHTML;
//   const rightItem = document.getElementById('right-item').innerHTML;
//   const rightRightItem = document.getElementById('right-right-item').innerHTML;
//   document.getElementById('center-item').innerHTML = rightItem;
//   document.getElementById('left-item').innerHTML = centerItem;
//   document.getElementById('right-item').innerHTML = leftItem;
//   document.getElementById('left-left-item').innerHTML = rightItem;
//   document.getElementById('right-right-item').innerHTML = centerItem;
// };

// slider.addEventListener('animationend', (event) => {
//   if (event.animationName === 'right-move') {
//     leftMoveFunc();
//   } else {
//     rightMoveFunc();
//   }
//   leftDesktopSliderButton.addEventListener('click', leftMove);
//   rightDesktopSliderButton.addEventListener('click', rightMove);
// });


/* Slider label change */

const spainInput = document.getElementById('spain');
const japanInput = document.getElementById('japan');
const usaInput = document.getElementById('usa');
const spainLabel = document.getElementById('spain-label');
const japanLabel = document.getElementById('japan-label');
const usaLebel = document.getElementById('usa-label');


const inputSpain = () => {
  spainInput.setAttribute('checked', 'true');
  japanInput.removeAttribute('checked', 'true');
  japanLabel.classList.remove('destinations__slidebar_checked');
  spainLabel.classList.add('destinations__slidebar_checked');
};

const inputJapan = () => {
  japanInput.setAttribute('checked', 'true');
  spainInput.removeAttribute('checked', 'true');
  japanLabel.classList.add('destinations__slidebar_checked');
  spainLabel.classList.remove('destinations__slidebar_checked');
};

window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth < 391) {
    inputSpain();
  } else {
    inputJapan();
  }
});

/* Slider desktop v2 */

const sliderDesktop = document.querySelector('.destinations__slider_desktop-line');
const leftDesktopSliderButton = document.getElementById('left-button-desktop');
const rightDesktopSliderButton = document.getElementById('right-button-desktop');
const dotsDesktopArr = document.querySelectorAll('.destinations__slidebar-label');

let positionDesktop = 0;
let dotIndexDesktop = 1;

const rightSlideDesktop = () => {
  if (positionDesktop > (dotsDesktopArr.length - 2) * -860) {
    positionDesktop = positionDesktop - 860;
    dotIndexDesktop = dotIndexDesktop + 1;
  } else {
    positionDesktop = 860;
    dotIndexDesktop = 0;
  }
  sliderDesktop.style.left = positionDesktop + 'px';
  currentClideDesktop(dotIndexDesktop);
};

const leftSlideDesktop = () => {
  if (positionDesktop <= 0) {
    positionDesktop = positionDesktop + 860;
    dotIndexDesktop = dotIndexDesktop - 1;
  } else {
    positionDesktop = (dotsDesktopArr.length - 2) * -860;
    dotIndexDesktop = dotsDesktopArr.length - 1;
  }
  sliderDesktop.style.left = positionDesktop + 'px';
  currentClide(dotIndexDesktop);
};

const currentClideDesktop = (index) => {
  for (let label of dotsDesktopArr) {
    label.classList.remove('destinations__slidebar_checked');
  }
  dotsDesktopArr[index].classList.add('destinations__slidebar_checked');
};

rightDesktopSliderButton.addEventListener('click', rightSlideDesktop);
leftDesktopSliderButton.addEventListener('click', leftSlideDesktop);

dotsDesktopArr.forEach((label, index) => {
  label.addEventListener('click', () => {
    positionDesktop = -860 * (index - 1);
    sliderDesktop.style.left = positionDesktop + 'px';
    dotIndexDesktop = index;
    currentClideDesktop(dotIndexDesktop);
  });
});

/* Slider mobile */

const sliderMobile = document.querySelector('.destinations__slider_mobile-line');
const leftMobileButton = document.querySelector('.destinations__slider-button_mobile-left');
const rightMobileButton = document.querySelector('.destinations__slider-button_mobile-right');
const dotsArr = document.querySelectorAll('.destinations__slidebar-label');

let position = 0;
let dotIndex = 0;

const rightSlide = () => {
  if (position > (dotsArr.length - 1) * -360) {
    position = position - 360;
    dotIndex = dotIndex + 1;
  } else {
    position = 0;
    dotIndex = 0;
  }
  sliderMobile.style.left = position + 'px';
  currentClide(dotIndex);
};

const leftSlide = () => {
  if (position < 0) {
    position = position + 360;
    dotIndex = dotIndex - 1;
  } else {
    position = (dotsArr.length - 1) * -360;
    dotIndex = dotsArr.length - 1;
  }
  sliderMobile.style.left = position + 'px';
  currentClide(dotIndex);
};

const currentClide = (index) => {
  for (let label of dotsArr) {
    label.classList.remove('destinations__slidebar_checked');
  }
  dotsArr[index].classList.add('destinations__slidebar_checked');
};

rightMobileButton.addEventListener('click', rightSlide);
leftMobileButton.addEventListener('click', leftSlide);

dotsArr.forEach((label, index) => {
  label.addEventListener('click', () => {
    position = -360 * index;
    sliderMobile.style.left = position + 'px';
    dotIndex = index;
    currentClide(dotIndex);
  });
});

