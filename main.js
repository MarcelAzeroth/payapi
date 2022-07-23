//Reusable HTML.
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav class="navbar">
                <div class="navbar__logo">
                <a href="/">
                <img src="./assets/shared/desktop/logo.svg" alt="Logo">
                </a>
                </div>
                <div class="navbar__clickable">
                    <div class="navbar__clickable__close">
                        <img src="./assets/shared/mobile/close.svg" alt="">
                    </div>
                    <ul class="navbar__links">
                        <li class="navbar__links__link"><a href="pricing.html">Pricing</a></li>
                        <li class="navbar__links__link"><a href="about.html">About</a></li>
                        <li class="navbar__links__link"><a href="contact.html">Contact</a></li>
                    </ul>
                    <div class="navbar__cta">
                        <button class="navbar__cta__button button">Schedule a Demo</button>
                    </div>
                </div>
                <div class="navbar__menu-btn">
                    <img src="./assets/shared/mobile/menu.svg" alt="">
                </div>
            </nav>
        </header>
        `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
        <div class="footer">
            <div class="footer__logo">
            <a href="/">
            <img src="./assets/shared/desktop/logo-white.svg" alt="">
            </a>
            </div>
            <ul class="footer__links">
                <li class="footer__links__link"><a href="pricing.html">Pricing</a></li>
                <li class="footer__links__link"><a href="about.html">About</a></li>
                <li class="footer__links__link"><a href="contact.html">Contact</a></li>
            </ul>
            <ul class="footer__socials">
                <li class="footer__socials__link"><a href="">
                    <img src="./assets/shared/desktop/facebook.svg" alt="">
                </a></li>
                <li class="footer__socials__link"><a href="">
                    <img src="./assets/shared/desktop/twitter.svg" alt="">
                </a></li>
                <li class="footer__socials__link"><a href="">
                    <img src="./assets/shared/desktop/linkedin.svg" alt="">
                </a></li>
            </ul>    
        </div>
    </footer>
        `;
  }
}

class CtaButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="cta">
            <h2 class="cta__headline">
                Ready to start?
            </h2>
            <form action="" class="cta__form">
                <input type="email" class="cta__form__input" placeholder="Enter email address">
                <button class="cta__form__button button">Schedule a Demo</button>
            </form>
        </section>
        `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
customElements.define("main-cta", CtaButton);

//Hamburger click.
const hamburger = document.querySelector(".navbar__menu-btn");
const closeButton = document.querySelector(".navbar__clickable__close img");
const sidebar = document.querySelector(".navbar__clickable");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
});
closeButton.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

//Change Image on About page.
document.addEventListener("DOMContentLoaded", () => {
  const aboutImage = document.querySelector(".about__image img");
  if (!aboutImage) {
    return;
  }

  let windowSize = window.innerWidth;
  if (windowSize >= 768) {
    aboutImage.setAttribute(
      "src",
      "./assets/about/tablet/image-team-members.jpg"
    );
  }
  if (windowSize >= 1440) {
    aboutImage.setAttribute(
      "src",
      "./assets/about/desktop/image-team-members.jpg"
    );
  }
});

//Form validation.
const form = document.querySelector(".contact__form");
//Fields.
const email = document.querySelector("#contact__email");
const nameInput = document.querySelector("#contact__name");
const msg = document.querySelector("#contact__message");
//Errors messages.
const nameError = document.querySelector("#error__name");
const mailErrorVal = document.querySelector("#error__email-val");
const mailErrorEmpty = document.querySelector("#error__email-empty");
const msgError = document.querySelector("#error__msg");

form.addEventListener("submit", (e) => {
  //Email validation.
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //Show error messages.
  if(nameInput.value === ""){
    nameError.classList.remove("hide");
    nameInput.classList.add("error-state");
    e.preventDefault();
  }
  if(msg.value === ""){
    msgError.classList.remove("hide");
    msg.classList.add("error-state");
    e.preventDefault();
  }
  if(email.value === ""){
    mailErrorEmpty.classList.remove("hide");
    email.classList.add("error-state");
    e.preventDefault();
  }
  if(!emailRegex.test(email.value) && email.value != ""){
    mailErrorVal.classList.remove("hide");
    email.classList.add("error-state");
    e.preventDefault();
  }
});


//Clear error states when typing.
email.addEventListener("input", function(){
  this.classList.remove("error-state");
  mailErrorEmpty.classList.add("hide");
  mailErrorVal.classList.add("hide");
})
nameInput.addEventListener("input", function(){
    this.classList.remove("error-state");
    nameError.classList.add("hide");
})
msg.addEventListener("input", function(){
    this.classList.remove("error-state");
    msgError.classList.add("hide");
})

