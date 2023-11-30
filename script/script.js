const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween:0,
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }
});

const chat = document.querySelector('.chat');

const popUp = document.createElement('form');
popUp.classList.add('form','popup__form');
popUp.id = 'dialog-content';
popUp.setAttribute('style','display:none');
popUp.innerHTML = `
        <label class="form__label">
            Номер телефона:
            <input class="form__input" type='tel' placeholder="+7xxxxxxxxxx">
        </label>
        <button class="form__button button-black">Отправить</button>
        <img class="form__image" src="/image/form.png">
`;
document.body.append(popUp);

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.setAttribute('data-fancybox','');
    button.setAttribute('data-src', '#dialog-content');
    Fancybox.bind('[data-fancybox]', {
        defaultDisplay: 'grid',
        closeButton: false,
        hideScrollbar: false
    });
});

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const chatIcon = document.querySelector('.chat');
    hero.getBoundingClientRect().y < 25 ? chatIcon.style.display = 'block': chatIcon.style.display = 'none';
});

